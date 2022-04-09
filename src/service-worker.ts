console.log('background script')

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'center-highlight-onnoff') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs)
      if (tabs[0] !== undefined && tabs[0].id !== undefined) {
        chrome.tabs.sendMessage(tabs[0].id, 'center-highlight-onnoff')
      }
    })
  }
})
