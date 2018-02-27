<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css',array('parent-style') );
  wp_enqueue_style( 'cont', get_stylesheet_directory_uri() . '/used/css/cont.css',array('parent-style') );
  wp_enqueue_style( 'header', get_stylesheet_directory_uri() . '/used/css/header.css',array('parent-style') );
  wp_enqueue_style( 'footer', get_stylesheet_directory_uri() . '/used/css/footer.css',array('parent-style') );
  wp_enqueue_style( 'sidebar', get_stylesheet_directory_uri() . '/used/css/sidebar.css',array('parent-style') );
}
?>