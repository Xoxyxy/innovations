import { Splide } from '@splidejs/splide'

document.addEventListener( 'DOMContentLoaded', function () {
  const splideMainLab = new Splide( '#splide-main-laboratories', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  const splideNavLab = new Splide( '#splide-navigation-laboratories', {
		gap       : 10,
    fixedWidth : 172,
    fixedHeight: 134,
		rewind    : true,
		pagination: false,
    perPage: 2,
    isNavigation: true,
  } );


  splideMainLab.sync( splideNavLab );
  splideMainLab.mount();
  splideNavLab.mount();

  const splideMainDev = new Splide( '#splide-main-develop', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  const splideNavDev = new Splide( '#splide-navigation-develop', {
		gap       : 10,
    fixedWidth : 172,
    fixedHeight: 134,
		rewind    : true,
		pagination: false,
    perPage: 2,
    isNavigation: true,
  } );


  splideMainDev.sync( splideNavDev );
  splideMainDev.mount();
  splideNavDev.mount();

  const splideMainInnovator = new Splide( '#splide-main-innovator', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  const splideNavInnovator = new Splide( '#splide-navigation-innovator', {
		gap       : 10,
    fixedWidth : 172,
    fixedHeight: 134,
		rewind    : true,
		pagination: false,
    perPage: 2,
    isNavigation: true,
  } );


  splideMainInnovator.sync( splideNavInnovator );
  splideMainInnovator.mount();
  splideNavInnovator.mount();
} );
