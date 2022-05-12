/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['0px', '0px','400px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
            },
            {
                id: 'Asset_2',
                type: 'image',
                rect: ['25px', '121px','265px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Asset%202.png",'0px','0px']
            },
            {
                id: 'lo2',
                type: 'image',
                rect: ['60px', '11px','195px','60px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lo.png",'0px','0px']
            },
            {
                id: 'Asset_5',
                type: 'image',
                rect: ['14px', '80px','309px','85px','auto', 'auto'],
                clip: ['rect(0px 388.4545593261719px 88.2727279663086px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Asset%205.png",'0px','49px'],
                transform: [[],[],[],['0.9']]
            },
            {
                id: 'Asset_4',
                type: 'image',
                rect: ['25px', '78px','266px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Asset%204.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Asset_4}": [
                ["style", "top", '78px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "background-position", [0.000000,31], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '25px']
            ],
            "${_lo2}": [
                ["style", "top", '11px'],
                ["style", "left", '60px'],
                ["style", "height", '60px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,-109,60,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '195px']
            ],
            "${_Asset_2}": [
                ["style", "top", '121px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '25px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '400px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Asset_5}": [
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "width", '309px'],
                ["style", "top", '80px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '85px'],
                ["style", "clip", [0,388.4545593261719,88.2727279663086,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,49], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_bg}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid73", tween: [ "style", "${_Asset_2}", "background-position", [0,50], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2560, duration: 340, easing: "easeInQuad" },
                { id: "eid80", tween: [ "style", "${_Asset_5}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,49]}], position: 2595, duration: 290, easing: "easeInOutQuad" },
                { id: "eid102", tween: [ "style", "${_bg}", "opacity", '0', { fromValue: '1'}], position: 4660, duration: 340, easing: "easeInOutQuad" },
                { id: "eid86", tween: [ "style", "${_Asset_5}", "opacity", '1', { fromValue: '0'}], position: 3165, duration: 335, easing: "easeInOutQuad" },
                { id: "eid99", tween: [ "style", "${_Asset_5}", "opacity", '0', { fromValue: '1'}], position: 4660, duration: 340, easing: "easeInOutQuad" },
                { id: "eid79", tween: [ "transform", "${_Asset_5}", "scaleY", '0.9', { fromValue: '0'}], position: 3010, duration: 290, easing: "easeInOutQuad" },
                { id: "eid23", tween: [ "style", "${_Asset_2}", "opacity", '1', { fromValue: '0'}], position: 975, duration: 220, easing: "easeInQuad" },
                { id: "eid101", tween: [ "style", "${_Asset_2}", "opacity", '0', { fromValue: '1'}], position: 4660, duration: 340, easing: "easeInOutQuad" },
                { id: "eid118", tween: [ "style", "${_Asset_4}", "opacity", '0', { fromValue: '1'}], position: 2560, duration: 290, easing: "easeInOutQuad" },
                { id: "eid113", tween: [ "style", "${_Asset_4}", "background-position", [0,1], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0.000000,31]}], position: 750, duration: 225, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "transform", "${_Asset_2}", "scaleX", '1', { fromValue: '0'}], position: 975, duration: 161, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_lo2}", "opacity", '1', { fromValue: '0'}], position: 305, duration: 335, easing: "easeInOutQuad" },
                { id: "eid98", tween: [ "style", "${_lo2}", "opacity", '0', { fromValue: '1'}], position: 4660, duration: 340, easing: "easeInOutQuad" },
                { id: "eid115", tween: [ "transform", "${_Asset_4}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 225, easing: "easeInOutQuad" },
                { id: "eid15", tween: [ "style", "${_lo2}", "clip", [0,195,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-109,60,0]}], position: 55, duration: 500, easing: "easeInOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-428240");
