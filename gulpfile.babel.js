import gulp from 'gulp'
import path from 'path'
import browserify from 'browserify'
import watchify from 'watchify'
import source from 'vinyl-source-stream'
import envify from 'loose-envify/custom'
import connect from 'gulp-connect'
import livereload from 'gulp-livereload'
import cssModulesify from 'css-modulesify'
import cssnext from 'postcss-cssnext'

const LOCAL_SERVER_PORT = 4000

const sourceFiles = [
    {
        entries: ['./src/client/main.jsx'],
        destination: './src/client/public/',
        cssOutput: 'bundle.css',
        output: 'bundle.js'
    },
]

const browserifySettings = {
    debug: true,
    extensions: ['.jsx', '.css'],
    paths: ['.'],
}

function createBundle({entries, output, destination, cssOutput},
                      {watch=false, production=false}) {
    let b = watch
        ? watchify(browserify({...watchify.args, ...browserifySettings, entries}))
            .on('update', bundle)
        : browserify({...browserifySettings, entries})
    b.transform(envify({
        NODE_ENV: production ? 'production' : 'development'
    }))

    if (cssOutput) {
        b.plugin(cssModulesify, {
            global: true,
            output: path.join(destination, cssOutput),
            postcssBefore: [cssnext],
        })
    }

    function bundle() {
        let startTime = new Date().getTime()
        b.bundle()
            .on('error', error=>console.error(error.message))
            .pipe(source(output))
            .pipe(gulp.dest(destination))
            .on('end', () => {
                let time = (new Date().getTime() - startTime) / 1000
                console.log(`Bundled ${output} in ${time}s.`)
            })
    }

    bundle()
}

gulp.task('server', function() {
    connect.server({
        root: 'src/client/',
        port: LOCAL_SERVER_PORT,
        livereload: true,
    });
});

gulp.task('buildServer', function() {
    connect.server({
        root: 'src/client/',
        port: process.env.PORT,
        livereload: false,
    });
});

gulp.task('build-prod', () => {
    sourceFiles.forEach(bundle => createBundle(bundle, {watch: false, production: true}))
})

gulp.task('build', () => {
    sourceFiles.forEach(bundle => createBundle(bundle, {watch: false}))
})

gulp.task('watch', () => {
    sourceFiles.forEach(bundle => createBundle(bundle, {watch: true, production: true}))
})

gulp.task('default', ['server', 'watch'])
gulp.task('buildWithRoot', ['buildServer', 'build-prod'])