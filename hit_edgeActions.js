/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      var moles = [];
      var up = [false,false,false,false];
      var symbol;
      var score = 0;
      
      function getSymbolTree(sym){
          return [sym].concat(dfs(sym));
      }
      function control(symbolArray,funct){
          for (var i=0; i < symbolArray.length; i++) {
              eval("symbolArray[i]." + funct);
          }
      }
      function dfs(sym){
          var arr = sym.getChildSymbols();
          var ret = [];
          for (var i=0; i < arr.length; i++) {
              ret = ret.concat(dfs(arr[i]));
              console.log(arr[i].getSymbolTypeName() );
          }
          ret = ret.concat(arr);
          return ret;
      }
      
      window.setInterval(function(){
      	var min = 0;
      	var max = 3;
         var i = Math.floor(Math.random() * (max - min + 1)) + min;
         if(! up[i]){
         	control(moles[i],"play('up');");
         	up[i] = true;
         }
      }, 1000);
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
      	for(var i = 1; i <= 4; ++i) {
      		var mole = sym.getSymbol("mole" + i);
      		mole = getSymbolTree(mole);
      		moles.push(mole);
      		mole[0].setVariable("serial_num", i-1);
      	}
      	symbol = sym;

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var score = 0;
         sym.getScore = function(){return score};
         sym.setScore = function(s){score = s};
         sym.getUp = function(){return up};
         sym.setUp = function(u){up = u};

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'left_hair'
   (function(symbolName) {   
   
   })("left_hair");
   //Edge symbol end:'left_hair'

   //=========================================================
   
   //Edge symbol: 'right_hair'
   (function(symbolName) {   
   
   })("right_hair");
   //Edge symbol end:'right_hair'

   //=========================================================
   
   //Edge symbol: 'mole'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("mole_graphic");
   //Edge symbol end:'mole_graphic'

   //=========================================================
   
   //Edge symbol: 'mole'
   (function(symbolName) {   
      var stage;
      
      Symbol.bindElementAction(compId, symbolName, "${_mole}", "click", function(sym, e) {
       var up = stage.getUp();
       var sn = sym.getVariable("serial_num");
       console.log(sn);
       if(up[sn]){
       	up[sn] = false;
       	console.log("hit");
       	sym.play("hit");
       	var score = sym.getComposition().getStage().getScore() + 1;
       	sym.getComposition().getStage().$("score").html("Your score: "+score);
       	sym.getComposition().getStage().setScore(score);
       	stage.setUp(up);
       }

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1999, function(sym, e) {
         sym.stop();
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 999, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2200, function(sym, e) {
         sym.play("down");
      
      });
      //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         stage = sym.getComposition().getStage();

      });
      //Edge binding end

   })("mole");
   //Edge symbol end:'mole'

})(jQuery, AdobeEdge, "EDGE-241848");