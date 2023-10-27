## Variables:

One of the main advantages of SCSS of CSS is the use of variables.

- In the project **All** colors should be variables, not hard coded RGBA or hexadecimal codes.
- All variables can be found in the "\_variables.scss" file found at: src> app> styles> abstracts> \_variables.scss.
  - If there is a color you need that is **Not** in the variables file, please add it!
    - The variable naming structure is in kabob-case .
    - The name is proceeded by $ (like all Sass variables).
    - The name starts with the css property (example "**color**").
    - The name then contains the theme pallet (example "**primary**") _optional_.
    - The name then contains the description of what is being styled (example "**row**").
    - The name then contains any state (example "**hovered**") _optional_.
      - Example together: **$color-primary-row-hovered**
  - If you do add a new **Color** variable, please notify the design team so they can use it in their Figma designs.
- In order to be able to use the variables add an import to the top of your .scss file linking to the relative path of the main "styles.scss" file at the "src" level.
  - Example: (**@import "../../../../styles.scss";**)
- For more information on variable go to [Sass Variables](https://sass-lang.com/documentation/variables)