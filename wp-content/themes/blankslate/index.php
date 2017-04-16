<?php get_header(); ?>
<section id="content" role="main">
<?php
    //スラッグ(固定ページURL末尾)からページIDを取得
    $page_id= get_page_by_path('theme-exp');
    //ページIDからpost内容をget
    $page= get_post( $page_id );
?>
<article id="theme-exp">
    <header>
        <h2 class="entry-title">
            <!-- ページIDからパーマリンクを取得 -->
            <a href="<?php echo get_page_link( $page_id ); ?>">
                <!-- ページタイトルを取得 -->
                <?php echo $page->post_title; ?>
            </a>
        </h2>
    </header>
    <section class="entry-content">
        <!-- ページ内容を取得 -->
        <?php echo $page->post_content; ?>
    </section>
</article>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'entry' ); ?>
<?php comments_template(); ?>
<?php endwhile; endif; ?>
<?php get_template_part( 'nav', 'below' ); ?>
</section>
<?php get_sidebar(); ?>
<?php get_footer(); ?>