<?php
/**
 * Plugin Name: Timeline Block
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: Timeline Block — adds a timeline block to the gutenberg page editor
 * Author: webworx
 * Author URI: https://webworxdesign.co.za
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
