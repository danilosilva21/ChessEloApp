/*
 * File: app/view/pivot/HeatMap.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Enif.view.pivot.HeatMap', {
    extend: 'Ext.Panel',
    alias: 'widget.pivot.heatmap',

    requires: [
        'Enif.view.pivot.HeatMapViewModel',
        'Ext.Toolbar',
        'Ext.Label',
        'Ext.d3.HeatMap',
        'Ext.d3.axis.Data',
        'Ext.d3.axis.Color'
    ],

    viewModel: {
        type: 'pivot.heatmap'
    },
    title: 'My Panel',

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'label',
                    html: 'Currently displaying winrate in %'
                }
            ]
        },
        {
            xtype: 'd3-heatmap',
            height: '100%',
            width: '100%',
            padding: '50 50 50 100',
            store: 'pivot.HeatMap',
            legend: {
                docked: 'right',
                padding: 50,
                items: {
                    count: 5,
                    slice: [
                        1
                    ],
                    reverse: true,
                    size: {
                        x: 60,
                        y: 30
                    }
                }
            },
            tiles: {
                attr: {
                    stroke: '#081d58',
                    'stroke-width': 2
                }
            },
            xAxis: {
                axis: {
                    orient: 'top'
                },
                scale: {
                    type: 'band'
                },
                title: {
                    text: 'Player2'
                },
                field: 'player2',
                step: 86400000
            },
            yAxis: {
                axis: {
                    orient: 'left'
                },
                scale: {
                    type: 'band'
                },
                title: {
                    text: 'Player1'
                },
                field: 'player1',
                step: 100
            },
            colorAxis: {
                field: 'dataField',
                minimum: 0,
                scale: {
                    type: 'linear',
                    range: [
                        '#ffffd9',
                        '#49b6c4',
                        '#225ea8'
                    ]
                }
            }
        }
    ]

});