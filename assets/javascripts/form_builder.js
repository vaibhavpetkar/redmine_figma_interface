document.addEventListener("DOMContentLoaded", function() {
  var formElements = document.getElementById('form-elements');
  var dropZone = document.getElementById('drop-zone');

  // Initialize Sortable for form elements and drop zone
  Sortable.create(formElements, {
    group: {
      name: 'shared',
      pull: 'clone',
      put: false
    },
    sort: false,
    handle: '.handle'
  });

  Sortable.create(dropZone, {
    group: 'shared',
    animation: 150,
    onAdd: function (evt) {
      var itemEl = evt.item;
      var componentType = itemEl.getAttribute('data-type');
      var newComponent = createComponent(componentType);
      itemEl.replaceWith(newComponent);
    }
  });

  // Function to create a component based on type
  function createComponent(type) {
    var element;
    switch(type) {
      case 'text-field':
        element = createTextField();
        break;
      case 'textarea':
        element = createTextarea();
        break;
      case 'checkbox':
        element = createCheckbox();
        break;
      case 'radio-button':
        element = createRadioButton();
        break;
      case 'dropdown':
        element = createDropdown();
        break;
      case 'button':
        element = createButton();
        break;
      case 'date-picker':
        element = createDatePicker();
        break;
      case 'file-upload':
        element = createFileUpload();
        break;
      case 'slider':
        element = createSlider();
        break;
      case 'switch':
        element = createSwitch();
        break;
      case 'color-picker':
        element = createColorPicker();
        break;
      case 'range-input':
        element = createRangeInput();
        break;
      case 'password-field':
        element = createPasswordField();
        break;
      case 'number-input':
        element = createNumberInput();
        break;
      case 'label':
        element = createLabel();
        break;
      case 'image':
        element = createImage();
        break;
      default:
        element = document.createElement('div');
        element.innerText = 'Unknown type';
    }
    element.classList.add('dropped-element');

    // Add event listeners for styling and options
    addDynamicOptions(element);

    return element;
  }

  // Create functions for each component
  function createTextField() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Label:</label><input type="text" placeholder="Enter text">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createTextarea() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Label:</label><textarea placeholder="Enter text"></textarea>
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createCheckbox() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label><input type="checkbox"> Checkbox</label>
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createRadioButton() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label><input type="radio" name="radio-group"> Radio Button</label>
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createDropdown() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Dropdown:</label><select><option>Option 1</option><option>Option 2</option></select>
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createButton() {
    var container = document.createElement('div');
    container.innerHTML = `
      <button>Button</button>
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createDatePicker() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Date Picker:</label><input type="date">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createFileUpload() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>File Upload:</label><input type="file">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createSlider() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Slider:</label><input type="range" min="0" max="100">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createSwitch() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createColorPicker() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Color Picker:</label><input type="color">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createRangeInput() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Range Input:</label><input type="range" min="0" max="100">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createPasswordField() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Password Field:</label><input type="password" placeholder="Enter password">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createNumberInput() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Number Input:</label><input type="number" placeholder="Enter number">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createLabel() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Text Block:</label><input type="text" value="Label" class="label-text">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  function createImage() {
    var container = document.createElement('div');
    container.innerHTML = `
      <label>Image:</label><input type="file" accept="image/*">
      <div class="component-options">
        <label>Font Size: </label><input type="number" value="14" class="font-size">
        <label>Color: </label><input type="color" class="color-picker">
        <button class="remove-element">Remove</button>
      </div>
    `;
    return container;
  }

  // Function to add dynamic options like font size, color picker, etc.
  function addDynamicOptions(element) {
    var fontSizeInput = element.querySelector('.font-size');
    var colorPicker = element.querySelector('.color-picker');

    if (fontSizeInput) {
      fontSizeInput.addEventListener('input', function(event) {
        element.style.fontSize = event.target.value + 'px';
      });
    }

    if (colorPicker) {
      colorPicker.addEventListener('input', function(event) {
        element.style.color = event.target.value;
      });
    }

    var removeButton = element.querySelector('.remove-element');
    if (removeButton) {
      removeButton.addEventListener('click', function() {
        element.remove();
      });
    }
  }
});
