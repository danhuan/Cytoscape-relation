$(function () {
    $.get('data/cytoscape-gx1.json', function (result) {
        var style = [
            {
                selector: 'node[label = "MAIN"]',
                css: {
                    'font-size': '8px',
                    'width': '100px',
                    'height':'100px',
                    'background-color': '#fc1400',
                    'background-image': 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=db24276840fbfbedc8543e2d19999c53/8718367adab44aedaff808b3b81c8701a18bfb37.jpg',
                    'background-fit': 'cover',
                    'border-color': '#000',
                    'border-width': 3,
                    'border-opacity': 0.5,
                    'content': 'data(name)'
                }
            },
            {
                selector: 'node[label = "group1"]',
                css: {
                    'background-color': '#fff',
                    'width':'25px',
                    'height':'25px',
                    'border-color': '#00AADB',
                    'border-width': 8,
                    // 'border-opacity': 0.5,
                    'content': 'data(name)',
                    'font-size': '8px'
                }
            },
            {
                selector: 'node[label = "group2"]',
                css: {
                    'background-color': '#fff',
                    'width':'25px',
                    'height':'25px',
                    'border-color': '#f9a064',
                    'border-width': 8,
                    'content': 'data(name)',
                    'font-size': '8px'
                }
            },
            {
                selector: 'node[label = "group3"]',
                css: {
                    'background-color': '#fff',
                    'width':'25px',
                    'height':'25px',
                    'border-color': '#6ecea6',
                    'border-width': 8,
                    'content': 'data(name)',
                    'font-size': '8px'
                }
            },
            {
                selector: 'node[label = "hometown"]',
                css: {
                    'background-color': '#00aadb',
                    'content': 'data(name)',
                    'font-size': '8px'
                }
            },
            {
                selector: 'node[label = "school"]',
                css: {
                    'background-color': '#f9a064',
                    'content': 'data(name)',
                    'font-size': '8px'
                }
            },
            {
                selector: 'node[label = "worker"]',
                css: {
                    'background-color': '#6ecea6',
                    'content': 'data(name)',
                    'font-size': '8px'
                }
            },
            {
                selector: 'edge',
                css: {
                    // 'content': 'data(relationship)',
                    // 'target-arrow-shape': 'triangle',
                    'source-arrow-shape': 'triangle',
                    'font-size': '8px'
                }
            }
        ];

        var cy = cytoscape({
            container: document.getElementById('cy'),
            style: style,
            layout: {
                name: 'cose',
                fit: true
            },
            elements: result.elements
        });
    }, 'json');
});