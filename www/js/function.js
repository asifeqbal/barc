document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert("Device is starting");
    // cordova.plugins.barcodeScanner.scan(
      // function (result) {
          // alert("We got a barcode\n" +
                // "Result: " + result.text + "\n" +
                // "Format: " + result.format + "\n" +
                // "Cancelled: " + result.cancelled);
      // },
      // function (error) {
          // alert("Scanning failed: " + error);
      // },
      // {
          // preferFrontCamera : true, // iOS and Android
          // showFlipCameraButton : true, // iOS and Android
          // showTorchButton : true, // iOS and Android
          // torchOn: true, // Android, launch with the torch switched on (if available)
          // saveHistory: true, // Android, save scan history (default false)
          // prompt : "Place a barcode inside the scan area", // Android
          // resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          // formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          // orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          // disableAnimations : true, // iOS
          // disableSuccessBeep: false // iOS and Android
      // }
   // );
   
   
   function downloadFile() {
		alert('hello');
		
				var fileURL = cordova.file.dataDirectory + 'file.gif';
				var uri = encodeURI("https://78.media.tumblr.com/b9f6d8d738b6da97541f5cbdcb0e8ab5/tumblr_o5w2roswuy1ukldkho1_400.gif");

				var fileTransfer = new FileTransfer();

				fileTransfer.download(
					uri,
					fileURL,
					function(entry) {
						console.log("download complete: " + entry.toURL());
						alert("download complete: " + entry.toURL());
					},
					function(error) {
						console.log("download error source " + error.source);
						console.log("download error target " + error.target);
					  
						// 1 = FileTransferError.FILE_NOT_FOUND_ERR
						// 2 = FileTransferError.INVALID_URL_ERR
						// 3 = FileTransferError.CONNECTION_ERR
						// 4 = FileTransferError.ABORT_ERR
						// 5 = FileTransferError.NOT_MODIFIED_ERR
						console.log("upload error code " + error.code);
					},
					false,
					{
						headers: {
							// add custom headers if needed
						}
					}
				);
	}	
}
