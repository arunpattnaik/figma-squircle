figma.showUI(__html__, { width: 232, height: 208 });

figma.ui.onmessage = msg => {
  if (msg.type === 'create-squircle') {
    const nodes: SceneNode[] = [];
    const squircle = figma.createNodeFromSvg(msg.squircle)
    figma.currentPage.appendChild(squircle);
    nodes.push(squircle);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
  figma.closePlugin();
};


// // This plugin will open a modal to prompt the user to enter a number, and
// // it will then create that many rectangles on the screen.

// // This file holds the main code for the plugins. It has access to the *document*.
// // You can access browser APIs in the <script> tag inside "ui.html" which has a
// // full browser enviroment (see documentation).

// // This shows the HTML page in "ui.html".
// figma.showUI(__html__, {width: 232, height: 208 });

// // Calls to "parent.postMessage" from within the HTML page will trigger this
// // callback. The callback will be passed the "pluginMessage" property of the
// // posted message.
// figma.ui.onmessage = msg => {
// 	// One way of distinguishing between different types of messages sent from
// 	// your HTML page is to use an object with a "type" property like this.
// 	if (msg.type === 'create-shapes') {

// 		const nodes: SceneNode[] = [];

// 		for (let i = 0; i < msg.count; i++) {

// 			var shape;

// 			if (msg.shape === 'rectangle') {
// 				shape = figma.createRectangle();
// 			} else if (msg.shape === 'triangle') {
// 				shape = figma.createPolygon();
// 			} else {
// 				shape = figma.createEllipse();
// 			}

// 			shape.x = i * 150;
// 			shape.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
// 			figma.currentPage.appendChild(shape);
// 			nodes.push(shape);
// 		}

// 		figma.currentPage.selection = nodes;
// 		figma.viewport.scrollAndZoomIntoView(nodes);
// 	}

// 	// Make sure to close the plugin when you're done. Otherwise the plugin will
// 	// keep running, which shows the cancel button at the bottom of the screen.
// 	figma.closePlugin();
// };
