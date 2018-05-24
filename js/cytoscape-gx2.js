$(function () {
    $.get('data/cytoscape-gx2.json', function (result) {
    // $.get('http://192.168.10.181:5000/official/connection/?name1=%E4%B9%A0%E8%BF%91%E5%B9%B3&&name2=%E5%8D%A2%E6%98%8E%E7%AB%8B', function (result) {
        var result = result.data;
        var style = [
            {
                selector: 'node',
                style: {
                    'content': 'data(name)',
                    // "text-valign": "bottom",
                    'font-size': '14px'
                }
            },
            {
                selector: 'node[type = "t"]',
                style: {
                    'width': '60px',
                    'height': '60px',
                    'background-color': '#268fcc',
                    'background-image': 'data(img)',
                    'background-fit': 'cover',
                    'border-color': '#fff',
                    'border-width': 1,
                    'border-opacity': 0.5,
                }
            },
            {
                selector: 'node[type = "n"]',
                style: {
                    'width':'30px',
                    'height':'30px',
                    'border-color': '#268fcc',
                    'border-width': 5,
                    'background-color': '#fff',
                    'label': 'data(name)',
                    "text-wrap": "wrap",
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 1,
                    'line-color':'#bbb',
                    'line-style':'dashed',//solid, dotted, or dashed.
                    'content': 'data(rel)',
                    "edge-text-rotation": "autorotate",
                    // "text-outline-color": "#fff",
                    // "text-outline-width": 2,
                    "text-background-opacity": 0.3,
                    "text-background-color": "#9afa00",
                    "text-background-shape": "roundrectangle",
                    "text-background-padding":"5px",
                    // "text-border-color": "#000",
                    // "text-border-width": 1,
                    // "text-border-opacity": 1,
                    'font-size': '14px'

                }
            },
            {
                selector: 'edge[rel = "联系"]',
                style: {
                    "text-background-color": "#FF9853",

                }
            },
            {
                selector: 'edge[rel = "同行"]',
                style: {
                    "text-background-color": "#9dd100"
                }
            },
            {
                selector: 'edge[rel = "同学"]',
                style: {
                    "text-background-color": "#00ACDD",
                }
            },
            {
                selector: 'edge[rel = "同事"]',
                style: {
                    "text-background-color": "#00CCA2",
                }
            },
            {
                selector: 'edge[rel = "同乡"]',
                style: {
                    "text-background-color": "#009f40",

                }
            },
            {
                selector: 'edge[rel = "亲属"]',
                style: {
                    "text-background-color": "#dd5200"
                }
            },
            {
                selector: 'edge[rel = "关联"]',
                style: {
                    "text-background-color": "#dd00af"
                }
            }
        ];

        var cy = cytoscape({
            container: document.getElementById('cy'),
            style: style,
            layout: {
                name: 'breadthfirst',
                directed: true,
                padding: 10
            },
            // layout: { name: 'cose', fit: false },
            elements: result.elements,

            ready: function () {
                // ready 2
            }
        });

        cy.on('tap', 'node', function(){
            try { // your browser may block popups
                window.open( 'http://192.168.10.119:8888/echart-gx1.html?'+this.data('id') );
            } catch(e){ // fall back on url change
                window.location.href = this.data('id');
            }
        });


    }, 'json');
});