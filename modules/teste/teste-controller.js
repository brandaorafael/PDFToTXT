module.exports = function (java){

  return {
    get: function (req, res) {

    	// java.classpath.push("out/artifacts/PDFToTXT_jar/PDFToTXT.jar");
    	java.classpath.push("PDFToTXT.jar");

    	var teste = java.newInstanceSync("Teste", "Totonho");

    	teste.speak(function (error,data) {
        
        	return res.json({sucess: data});

      	});

    }
  }
}