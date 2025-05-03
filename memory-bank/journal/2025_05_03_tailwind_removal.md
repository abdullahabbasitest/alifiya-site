# Tailwind CSS Removal - May 3, 2025

## Context
During the initial setup and component implementation phase, we reconsidered our styling approach for Alifiya Parekh's professional website. This journal documents the decision to remove Tailwind CSS in favor of custom CSS.

## Initial Approach
Initially, Tailwind CSS was chosen for its utility-first approach and rapid development capabilities. Configuration files were set up:

1. **tailwind.config.js** - For customizing the Tailwind theme
2. **postcss.config.js** - For processing the CSS

## Reconsideration Process
After initial implementation, several factors led to reconsidering this approach:

### Challenges Identified
1. **High Specificity Conflicts**: In some components, overriding Tailwind's utility classes became cumbersome
2. **Code Readability**: Component JSX became cluttered with long class lists
3. **Bundle Size**: The full Tailwind library included many unused utilities, increasing initial load time
4. **Learning Curve**: Custom CSS approach would be more immediately understandable for future maintainers
5. **Design Control**: Creating exactly the desired design for a professional medical device resume site required many custom styles anyway

### Analysis
A comparative analysis was conducted:

| Factor | Tailwind CSS | Custom CSS |
|--------|-------------|------------|
| Development Speed | Initially faster | Slightly slower startup, faster iterations |
| Bundle Size | Larger (even with purging) | Smaller, more optimized |
| Maintainability | Requires knowledge of Tailwind | Standard CSS knowledge sufficient |
| Design Precision | Sometimes requires workarounds | Direct control |
| Responsive Design | Good built-in utilities | More explicit, but full control |

## Decision
After careful consideration, we decided to remove Tailwind CSS and use custom component-based CSS for the following reasons:

1. **Professional Resume Focus**: For a professional resume site, precision in styling and brand representation outweighs rapid development benefits
2. **Performance**: Custom CSS allows for a smaller bundle size and faster initial load
3. **Maintainability**: Component-specific CSS files provide clearer organization and easier maintenance
4. **Design Control**: Direct CSS provides finer control over exact styling needs for a medical professional's website

## Implementation
The transition involved:

1. Removing Tailwind dependencies from package.json
2. Deleting tailwind.config.js and modifying postcss.config.js
3. Creating a CSS directory structure:
   ```
   src/
   └── styles/
       ├── components/
       │   └── Header.css
       ├── sections/
       └── global.css
   ```
4. Implementing CSS variables for theming in index.css:
   ```css
   :root {
     --primary-color: #2e5984;
     --secondary-color: #6c8fb3;
     --accent-color: #d1e1f0;
     --text-color: #333333;
     /* Additional theme variables */
   }
   ```
5. Converting Tailwind utility classes to custom CSS in component files

## Results
The transition to custom CSS resulted in:
- Cleaner component code
- More precise styling control
- Smaller bundle size
- More maintainable styling architecture

## Lessons Learned
- Technology choices should align with the specific project requirements and goals
- For professional portfolio websites, styling precision and control may outweigh development speed advantages
- Consider the maintenance implications of styling approaches from the beginning

## Next Steps
- Complete the implementation of component-specific CSS files
- Establish consistent styling patterns across components
- Document CSS variables and common patterns for future reference
