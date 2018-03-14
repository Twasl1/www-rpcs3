/* Handles dark mode save states (Needs refactoring)*/
$(document).ready(function() {
    var sel = $.cookie("save-darkmode"); // get the cookie
    sel = sel == "true";
    $('.toggle-darkmode').toggleClass("activate-darkmode", sel).on('click', function(e) {
		$('.darkmode-icon').toggleClass("dm-icon");
        $('body').toggleClass("dm-bg");
        $('.darkmode-header').toggleClass("dm-header");
		$('.darkmode-header-patreon').toggleClass("dm-header-patreon");
		$('.darkmode-feature').toggleClass("dm-feature");
        $('.darkmode-menubar').toggleClass("dm-menubar");
        $('.darkmode-block').toggleClass("dm-block");
		$('.darkmode-contribute').toggleClass("dm-default");
        $('.darkmode-panel').toggleClass("dm-panel");
        $('.darkmode-txt').toggleClass("dm-txt");
		$('.darkmode-txt2').toggleClass("feature-txt-wrap-invert");
        $('.darkmode-ad').toggleClass("dm-ad");
        $('.darkmode-highlight').toggleClass("dm-highlight");
        $('.darkmode-menubar-l1').toggleClass("dm-menubar-l1");
        $('.darkmode-menubar-l2').toggleClass("dm-menubar-l2");
        $('.darkmode-navsidebar-title').toggleClass("dm-navsidebar-title");
        $('.darkmode-navsidebar-anim').toggleClass("dm-navsidebar-anim");
        $('.darkmode-navsidebar-txt').toggleClass("dm-navsidebar-txt");
		$('.darkmode-buttons-general').toggleClass("dm-buttons-general");
        $(".markdown-body").toggleClass("dm-txt");
        $(".markdown-body h2").toggleClass("dm-txt");
		$(".markdown-body h2").toggleClass("dm-udl");
        $("#featured-con-block h2").toggleClass("dm-txt");
        $("#featured-con-block p").toggleClass("dm-txt");
		$(".markdown-body li").toggleClass("dm-txt");
		$(".feature-ico-flag").toggleClass("dm-flag");
		$('.darkmode-footer-logo').toggleClass("dm-footer-logo");
        $(".divTable").toggleClass("dm-block");
		$(".divTableHeading").toggleClass("dm-block");
        $(".divTableHeading").toggleClass("dm-txt");
		$(".divTableBody").toggleClass("dm-block");
        $(".divTableBody").toggleClass("dm-txt");
        $(".compat-tx1-criteria").toggleClass("dm-block");
        $(".compat-tx1-criteria").toggleClass("dm-txt");
        $(".compat-status-text").toggleClass("dm-txt");
        $(".compat-search-character").toggleClass("dm-block-search");
        $("#compat-con-pages").toggleClass("dm-block dm-txt");
        $("#compat-author").toggleClass("dm-compat-author");
        $(".nav-links").toggleClass("dm-blog-body dm-txt");
        $(".hentry").toggleClass("dm-blog-body dm-txt");
        $(".entry-header").toggleClass("dm-blog-header");
        $(".entry-footer").toggleClass("dm-blog-footer");
        $(".entry-content h2").toggleClass("dm-blog-h2");
		$(".entry-content ul li").toggleClass("dm-txt");
        $(".site-description").toggleClass("dm-blog-sidebar");
        $(".widget-title").toggleClass("dm-blog-sidebar");
        $(".page-header").toggleClass("dm-blog-body");
        $(".page-content").toggleClass("dm-blog-body dm-txt");
		$(".debug-main").toggleClass("dm-block");
		$(".debug-left").toggleClass("dm-block");
    });
    $(".toggle-darkmode").on("click", function() {
        var $this = $(this);
        sel = !sel;
        $this.toggleClass("activate-darkmode", sel);
        $.cookie("save-darkmode", sel, {
            expires: 365,
            path: '/'
        });
    });
});
$(document).ready(function() {
    if ($('.toggle-darkmode').hasClass('activate-darkmode')) {
		$('.darkmode-icon').toggleClass("dm-icon");
        $('body').addClass("dm-bg");
        $('.darkmode-header').addClass("dm-header");
		$('.darkmode-header-patreon').addClass("dm-header-patreon");
		$('.darkmode-feature').addClass("dm-feature");
        $('.darkmode-menubar').addClass("dm-menubar");
        $('.darkmode-block').addClass("dm-block");
		$('.darkmode-contribute').addClass("dm-default");
        $('.darkmode-panel').addClass("dm-panel");
        $('.darkmode-txt').addClass("dm-txt");
		$('.darkmode-txt2').toggleClass("feature-txt-wrap-invert");
        $('.darkmode-ad').addClass("dm-ad");
        $('.darkmode-highlight').addClass("dm-highlight");
        $('.darkmode-menubar-l1').addClass("dm-menubar-l1");
        $('.darkmode-menubar-l2').addClass("dm-menubar-l2");
        $('.darkmode-navsidebar-title').addClass("dm-navsidebar-title");
        $('.darkmode-navsidebar-anim').addClass("dm-navsidebar-anim");
        $('.darkmode-navsidebar-txt').addClass("dm-navsidebar-txt");
		$('.darkmode-buttons-general').addClass("dm-buttons-general");
        $(".markdown-body").addClass("dm-txt");
        $(".markdown-body h2").addClass("dm-txt");
		$(".markdown-body h2").addClass("dm-udl");
        $("#featured-con-block h2").addClass("dm-txt");
        $("#featured-con-block p").addClass("dm-txt");
		$(".markdown-body li").addClass("dm-txt");
		$(".feature-ico-flag").addClass("dm-flag");
		$('.darkmode-footer-logo').addClass("dm-footer-logo");
        $(".divTable").toggleClass("dm-block");
		$(".divTableHeading").toggleClass("dm-block");
        $(".divTableHeading").toggleClass("dm-txt");
		$(".divTableBody").toggleClass("dm-block");
        $(".divTableBody").toggleClass("dm-txt");
        $(".compat-tx1-criteria").toggleClass("dm-block");
        $(".compat-tx1-criteria").toggleClass("dm-txt");
        $(".compat-status-text").toggleClass("dm-txt");
        $(".compat-search-character").toggleClass("dm-block-search");
        $("#compat-con-pages").toggleClass("dm-block dm-txt");
        $("#compat-author").toggleClass("dm-compat-author");
        $(".nav-links").addClass("dm-blog-body dm-txt");
        $(".hentry").addClass("dm-blog-body dm-txt");
        $(".entry-header").addClass("dm-blog-header");
        $(".entry-footer").addClass("dm-blog-footer");
        $(".entry-content h2").addClass("dm-blog-h2");
		$(".entry-content ul li").addClass("dm-txt");
        $(".site-description").addClass("dm-blog-sidebar");
        $(".widget-title").addClass("dm-blog-sidebar");
        $(".page-header").addClass("dm-blog-body");
        $(".page-content").addClass("dm-blog-body dm-txt");
		$(".debug-main").addClass("dm-block");
		$(".debug-left").addClass("dm-block");
    } else {
		$('.darkmode-icon').removeClass("dm-icon");
        $('body').removeClass("dm-bg");
        $('.darkmode-header').removeClass("dm-header");
		$('.darkmode-header-patreon').removeClass("dm-header-patreon");
		$('.darkmode-feature').removeClass("dm-feature");
        $('.darkmode-menubar').removeClass("dm-menubar");
        $('.darkmode-block').removeClass("dm-block");
		$('.darkmode-contribute').removeClass("dm-default");
        $('.darkmode-panel').removeClass("dm-panel");
        $('.darkmode-txt').removeClass("dm-txt");
		$('.darkmode-txt2').addClass("feature-txt-wrap-invert");
        $('.darkmode-ad').removeClass("dm-ad");
        $('.darkmode-highlight').removeClass("dm-highlight");
        $('.darkmode-menubar-l1').removeClass("dm-menubar-l1");
        $('.darkmode-menubar-l2').removeClass("dm-menubar-l2");
        $('.darkmode-navsidebar-title').removeClass("dm-navsidebar-title");
        $('.darkmode-navsidebar-anim').removeClass("dm-navsidebar-anim");
        $('.darkmode-navsidebar-txt').removeClass("dm-navsidebar-txt");
		$('.darkmode-buttons-general').removeClass("dm-buttons-general");
        $(".markdown-body").removeClass("dm-txt");
        $(".markdown-body h2").removeClass("dm-txt");
		$(".markdown-body h2").removeClass("dm-udl");
        $("#featured-con-block h2").removeClass("dm-txt");
        $("#featured-con-block p").removeClass("dm-txt");
		$(".markdown-body li").removeClass("dm-txt");
		$(".feature-ico-flag").removeClass("dm-flag");
		$('.darkmode-footer-logo').removeClass("dm-footer-logo");
		$(".divTable").removeClass("dm-block");
		$(".divTableHeading").removeClass("dm-block");
        $(".divTableHeading").removeClass("dm-txt");
		$(".divTableBody").removeClass("dm-block");
        $(".divTableBody").removeClass("dm-txt");
        $(".compat-tx1-criteria").removeClass("dm-block");
        $(".compat-tx1-criteria").removeClass("dm-txt");
        $(".compat-status-text").removeClass("dm-txt");
        $(".compat-search-character").removeClass("dm-block-search");
        $("#compat-con-pages").removeClass("dm-block dm-txt");
        $("#compat-author").removeClass("dm-compat-author");
        $(".nav-links").removeClass("dm-blog-body dm-txt");
        $(".hentry").removeClass("dm-blog-body dm-txt");
        $(".entry-header").removeClass("dm-blog-header");
        $(".entry-footer").removeClass("dm-blog-footer");
        $(".entry-content h2").removeClass("dm-blog-h2");
		$(".entry-content ul li").removeClass("dm-txt");
        $(".site-description").removeClass("dm-blog-sidebar");
        $(".widget-title").removeClass("dm-blog-sidebar");
        $(".page-header").removeClass("dm-blog-body");
        $(".page-content").removeClass("dm-blog-body dm-txt");
		$(".debug-main").removeClass("dm-block");
		$(".debug-left").removeClass("dm-block");
    }
});