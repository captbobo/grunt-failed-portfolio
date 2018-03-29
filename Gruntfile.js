
module.exports = function(grunt){

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
//
// grunt-responsive-images plugin has a bug and the issue is: 
// "Crop mode does not work? #115"
//
// @ https://github.com/andismith/grunt-responsive-images/issues/115
//
// there, some solutions have been suggested and none of them 
// are used in this version of the portfolio 
//            
// (A Possible) Solution that utilizes grunt-exec plugin along with GraphicksMagick. 
// https://github.com/hannwong/udacity-FEND-portfolio-site/blob/master/Gruntfile.js
// 
          sizes: [{
            width: 800,
            height: 600,
            suffix: '_large_1x',
            quality: 80
          },{
            width: 1600,
            height: 1200,
            suffix: '_large_2x',
            quality: 60
          },{
            width: 400,
            height: 300,
            suffix: '_small_1x',
            sample: true,
            }],
            
          files:{
            expand: true,
            src: ['/*.{gif,jpg,png}'],
            cwd: 'images_src/',
            dest: 'images/'
            },
          },
        },
      },
        
        clean: {
          dev: {
            src: ['images']
            },
        },
        mkdir: {
          dev: {
            options: {
              create: ['images']
              },
            },
          },
//        copy: {
//          dev: {
//            files: [{
//              expand: true,
//              src: 'images_src/fixed/*.{gif,jpg,png}',
//              dest: 'images/'
//                }]
//            },
//        },
      });
    
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
//    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default',['clean','mkdir','responsive_images']);
    
  };
