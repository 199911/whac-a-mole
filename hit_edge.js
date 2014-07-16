/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'mole4',
                type: 'rect',
                rect: ['-6px', '-47','auto','auto','auto', 'auto']
            },
            {
                id: 'mole3',
                type: 'rect',
                rect: ['-6px', '-47px','auto','auto','auto', 'auto']
            },
            {
                id: 'mole2',
                type: 'rect',
                rect: ['-6px', '-47px','auto','auto','auto', 'auto']
            },
            {
                id: 'mole1',
                type: 'rect',
                rect: ['-6', '-47','auto','auto','auto', 'auto']
            },
            {
                id: 'score',
                type: 'text',
                rect: ['722px', '26px','254px','78px','auto', 'auto'],
                text: "Your score: 0<br>",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [
            {
                id: 'mole2',
                symbolName: 'mole',
                autoPlay: {

                }
            },
            {
                id: 'mole4',
                symbolName: 'mole',
                autoPlay: {

                }
            },
            {
                id: 'mole3',
                symbolName: 'mole',
                autoPlay: {

                }
            },
            {
                id: 'mole1',
                symbolName: 'mole',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_mole3}": [
                ["style", "left", '294px'],
                ["style", "top", '-47px']
            ],
            "${_mole4}": [
                ["style", "left", '691px'],
                ["style", "top", '41px']
            ],
            "${_mole1}": [
                ["style", "left", '0px'],
                ["style", "top", '71px']
            ],
            "${_mole2}": [
                ["style", "left", '434px'],
                ["style", "top", '153px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1000px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "down": 0,
                "up": 1000
            },
            timeline: [
                { id: "eid81", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mole1}', [1000] ], ""], position: 0 },
                { id: "eid82", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mole3}', [1000] ], ""], position: 0 },
                { id: "eid83", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mole2}', [1000] ], ""], position: 0 },
                { id: "eid84", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mole4}', [1000] ], ""], position: 0 }            ]
        }
    }
},
"left_hair": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '36px', '70px', '5px', 'auto', 'auto'],
                    id: 'hair_3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1)']
                },
                {
                    rect: ['3px', '55px', '70px', '5px', 'auto', 'auto'],
                    transform: [[], ['-30']],
                    id: 'hair_2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1)']
                },
                {
                    rect: ['3px', '17px', '70px', '5px', 'auto', 'auto'],
                    borderRadius: ['0px', '0px', '0px', '0px'],
                    transform: [[], ['30']],
                    id: 'hair_1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hair_3}": [
                ["style", "top", '36px'],
                ["style", "left", '0px'],
                ["style", "width", '70px']
            ],
            "${_hair_2}": [
                ["style", "top", '55px'],
                ["style", "width", '70px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '-30deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '77px'],
                ["style", "width", '70px']
            ],
            "${_hair_1}": [
                ["style", "top", '17px'],
                ["style", "width", '70px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '30deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"right_hair": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'left_hair2',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'left_hair2',
                symbolName: 'left_hair'
            }            ]
        },
    states: {
        "Base State": {
            "${_left_hair2}": [
                ["transform", "scaleX", '-1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '77px'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "transform", "${_left_hair2}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0 }            ]
        }
    }
},
"mole_graphic": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '200px', '250px', 'auto', 'auto'],
                    borderRadius: ['100px', '100px 100px', '0px', '0px'],
                    id: 'body',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        rect: ['92px', '127px', '15px', '15px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'nose',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,1.00)'],
                        c: [
                        {
                            id: 'left_hair',
                            type: 'rect',
                            transform: [[], [], [], [], ['100%']],
                            rect: ['-272px', '-15px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'right_hair2',
                            type: 'rect',
                            transform: [[], [], [], [], ['0%']],
                            rect: ['246px', '15px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    },
                    {
                        rect: ['45px', '54px', '40px', '40px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'left_eye',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,1.00)']
                    },
                    {
                        rect: ['115px', '54px', '40px', '40px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'right_eye',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,1.00)']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'left_hair',
                symbolName: 'left_hair',
                autoPlay: {

               }
            },
            {
                id: 'right_hair2',
                symbolName: 'right_hair',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_right_hair2}": [
                ["style", "top", '-30px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '8px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_nose}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '15px'],
                ["style", "top", '127px'],
                ["style", "left", '92px'],
                ["style", "width", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '250px'],
                ["style", "width", '200px']
            ],
            "${_left_eye}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '40px'],
                ["style", "top", '54px'],
                ["style", "left", '45px'],
                ["style", "width", '40px']
            ],
            "${_left_hair}": [
                ["style", "top", '-30px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-62px']
            ],
            "${_body}": [
                ["style", "top", '0px'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_right_eye}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '40px'],
                ["style", "top", '54px'],
                ["style", "left", '115px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid77", tween: [ "transform", "${_left_hair}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid78", tween: [ "transform", "${_left_hair}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 250, duration: 250 },
                { id: "eid79", tween: [ "transform", "${_left_hair}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 500, duration: 250 },
                { id: "eid80", tween: [ "transform", "${_left_hair}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 750, duration: 250 },
                { id: "eid64", tween: [ "transform", "${_right_hair2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid65", tween: [ "transform", "${_right_hair2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 250, duration: 250 },
                { id: "eid66", tween: [ "transform", "${_right_hair2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 500, duration: 250 },
                { id: "eid67", tween: [ "transform", "${_right_hair2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 750, duration: 250 }            ]
        }
    }
},
"mole": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['6px', '347px', '300px', '100px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'hole',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(68,48,48,1.00)']
                },
                {
                    id: 'mole',
                    type: 'rect',
                    clip: ['rect(0px 200px 250px 0px)'],
                    rect: ['6px', '47px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['31px', '61px', '350px', '225px', 'auto', 'auto'],
                    transform: [[], ['24']],
                    id: 'boom',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/boom.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'mole',
                symbolName: 'mole_graphic',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_boom}": [
                ["style", "display", 'none'],
                ["style", "top", '61px'],
                ["style", "left", '31px'],
                ["transform", "rotateZ", '24deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ],
            "${_mole}": [
                ["style", "top", '147px'],
                ["style", "clip", [0,200,250,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '56px']
            ],
            "${_hole}": [
                ["style", "height", '100px'],
                ["color", "background-color", 'rgba(68,48,48,1.00)'],
                ["style", "left", '6px'],
                ["style", "top", '347px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2200,
            autoPlay: false,
            labels: {
                "down": 0,
                "up": 1000,
                "hit": 2000
            },
            timeline: [
                { id: "eid37", tween: [ "style", "${_boom}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_boom}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_boom}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid39", tween: [ "style", "${_boom}", "display", 'none', { fromValue: 'block'}], position: 2200, duration: 0 },
                { id: "eid26", tween: [ "style", "${_mole}", "top", '397px', { fromValue: '147px'}], position: 0, duration: 1000 },
                { id: "eid27", tween: [ "style", "${_mole}", "top", '147px', { fromValue: '397px'}], position: 1000, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_mole}", "clip", [0,200,0,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,250,0]}], position: 0, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_mole}", "clip", [0,200,250,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,0,0]}], position: 1000, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-241848");
