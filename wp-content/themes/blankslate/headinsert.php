<?php if (is_singular()){
$headinsert = get_post_meta($post->ID,headinsert,true);
    if($headinsert){echo $headinsert;}
}
?>