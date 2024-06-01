function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    var downButton = document.getElementById("down-arrow");
    var upButton = document.getElementById("up-arrow");

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      upButton.style.display = "none";
      downButton.style.display = "block";
      
    } else {
      dropdownContent.style.display = "block";
      downButton.style.display = "none";
      upButton.style.display = "block";
    }
  }

  function toggleDropdown2() {
    var dropdownContent = document.getElementById("dropdown-content1");
    var downButton = document.getElementById("down-arrow1");
    var upButton = document.getElementById("up-arrow1");

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      upButton.style.display = "none";
      downButton.style.display = "block";
      
    } else {
      dropdownContent.style.display = "block";
      downButton.style.display = "none";
      upButton.style.display = "block";
    }
  }