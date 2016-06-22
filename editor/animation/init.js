//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {


        function Network(options) {

            var format = Raphael.format;

            //Colors
            var colorOrange4 = "#F0801A";
            var colorOrange3 = "#FA8F00";
            var colorOrange2 = "#FAA600";
            var colorOrange1 = "#FABA00";

            var colorBlue4 = "#294270";
            var colorBlue3 = "#006CA9";
            var colorBlue2 = "#65A1CF";
            var colorBlue1 = "#8FC7ED";

            var colorGrey4 = "#737370";
            var colorGrey3 = "#9D9E9E";
            var colorGrey2 = "#C5C6C6";
            var colorGrey1 = "#EBEDED";

            var colorWhite = "#FFFFFF";

            options = options || {};

            var R = options.radius || 160;
            var objR = 20;
//            var w = 25;
//            var h = 10;

            var x0 = 10;

            var sizeX = 2 * x0 + 2 * (R + objR);
            var sizeY = 2 * x0 + 2 * (R + objR);

            var centerX = x0 + R + objR;
            var centerY = x0 + R + objR;


            var paper;
            var networkObjects = {};
            var networkLines = {};

            var stepTime = 300;

            var attrCircle = {"stroke": colorBlue4, "stroke-width": 2, "fill": colorBlue1};
//            var attrRect = {"stroke": colorBlue4, "stroke-width": 2, "fill": colorBlue1};
            var attrNumber = {"font-family": "Roboto, Verdana, Geneva, sans-serif", "font-size": objR * 1.5};
//            var attrName = {"font-family": "Roboto, Verdana, Geneva, sans-serif", "font-size": h};
            var attrLine = {"stroke": colorBlue2, "stroke-width": 5};

            this.draw = function (dom, matrix) {
                paper = Raphael(dom, sizeX, sizeY);
                var angle = Math.PI * 2 / matrix.length;
                for (var i = 0; i < matrix.length; i++) {
                    var obj = paper.set();
                    var x = centerX - Math.cos(i * angle) * R;
                    var y = centerY - Math.sin(i * angle) * R;
                    obj.push(paper.circle(x, y, objR).attr(attrCircle).attr("stroke-width", matrix[i][i]));
//                    obj.push(paper.circ(x - w, y - h, objR).attr(attrRect));


                    if (i === 0) {
                        obj[0].attr("fill", colorOrange4);
                    }
                    obj.push(paper.text(x, y, i).attr(attrNumber));
//                    obj.push(paper.text(x, y, names[i]).attr(attrName));
                    obj.x = x;
                    obj.y = y;
                    networkObjects[i] = obj;
                    networkLines[i] = [];
                }
                for (i = 0; i < matrix.length; i++) {
                    for (var j = i + 1; j < matrix.length; j++) {
                        if (matrix[i][j] === 0) {
                            continue;
                        }
                        var fr = networkObjects[i];
                        var to = networkObjects[j];
                        var p = paper.path(
                            format("M{0},{1}L{2},{3}",
                                fr.x,
                                fr.y,
                                to.x,
                                to.y)).attr(attrLine).toBack();
                        networkLines[i].push(p);
                        networkLines[j].push(p);
                        if (i === 0) {
                            p.attr("stroke", colorOrange4);
                        }
                    }
                }
            };

            this.animate = function(expl, matrix) {
                for (var k = 0; k < matrix.length; k++) {
                    setTimeout(function(node) {
                        return function() {
                            networkObjects[node].animate({"stroke-width": 0}, stepTime * matrix[node][node],
                            callback=function(){
                                networkObjects[node][0].attr("fill", colorOrange4);
                                for (var n = 0; n < networkLines[node].length; n++) {
                                    networkLines[node][n].attr("stroke", colorOrange4);
                                }
                            });
                        }
                    }(k), expl[k] * stepTime);
                }
            }
        }

        //Your Additional functions or objects inside scope
        //
        //
        //

        var io = new extIO({
            animation: function($expl, data){
                var checkioInput = data.in;
                var explanation = data.ext?data.ext.explanation:undefined;
                if (!checkioInput || !explanation) {
                    return;
                }
                var canvas = new Network();
                canvas.draw($content.find($expl[0], checkioInput));
                canvas.animate(explanation, checkioInput);
                
            },
            functions: {
                python: 'capture',
                js: 'capture'
            }
        });
        io.start();

    }
);
