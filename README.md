# Toggle Password Visibility with SVG Icon

A simple JavaScript utility to toggle password visibility in input fields, using dynamically created SVG icons for "eye" and "eye-slash" symbols. This utility is built to work seamlessly with **Bootstrap 5+** and can be easily integrated into any web project.

## Features

- Toggle between showing and hiding password input values.
- Uses SVG icons for an eye (show password) and an eye-slash (hide password).
- Fully compatible with **Bootstrap 5+**.
- Lightweight and dependency-free.
- Error handling for robustness.

## Requirements

- **Bootstrap 5+**: Ensure that Bootstrap 5 (or higher) is included in your project to use the `input-group` and `btn` classes for styling.
- **JavaScript**: No external JavaScript libraries or frameworks are required.

## How It Works

To implement the toggle password functionality, simply include the JavaScript code in your project. Buttons with the attribute `data-action="toggle-password"` and a corresponding `data-target` attribute (pointing to the `id` of the password input field) will trigger the toggle.

The SVG icons for the eye (password visible) and eye-slash (password hidden) are created dynamically in the script.

### Example Usage

Here's an example of how to use this in a Bootstrap form:

```html
<div class="input-group">
  <input type="password" name="password" class="form-control" id="password">
  <button class="btn btn-primary" data-action="toggle-password" data-target="#password"></button>
</div>
