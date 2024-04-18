const timestampForm = document.getElementById('timestampForm');
    const resultDiv = document.getElementById('result');

    timestampForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const timestampInput = document.getElementById('timestampInput').value;
      const timestamp = Date.parse(timestampInput);

      if (!isNaN(timestamp)) {
        const date = new Date(timestamp);
        const unixTimestamp = Math.floor(date.getTime() / 1000);
        const naturalDate = date.toDateString();
        resultDiv.innerHTML = `<p class="resultDiv">Unix Timestamp: ${unixTimestamp}</p><p>Natural Date: ${naturalDate}</p>`;
      } else {
        resultDiv.innerHTML = '<p>Invalid input. Please enter a valid Unix timestamp or natural language date.</p>';
        
      }
    });