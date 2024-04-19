function viewMetadata() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
      const metadata = {
        Name: file.name,
        Type: file.type || 'Unknown',
        Size: formatBytes(file.size),
        LastModified: new Date(file.lastModified).toLocaleString()
      };

      const metadataDisplay = document.getElementById('file-metadata');
      metadataDisplay.innerHTML = '';
      for (const key in metadata) {
        if (metadata.hasOwnProperty(key)) {
          const row = document.createElement('div');
          row.textContent = `${key} :  ${metadata[key]}`;
          metadataDisplay.appendChild(row);
        }
      }
    }
  }

  // Format file size
  function formatBytes(bytes) {
    const kb = bytes / 1024;
    if (kb < 1024) {
      return kb.toFixed(2) + ' KB';
    } else {
      const mb = kb / 1024;
      return mb.toFixed(2) + ' MB';
    }
  }