# HTML - HyperText Markup Language

HTML - HTML stands for **Hypertext Markup Language**. It's the standard markup language for creating web pages and web applications. HTML provides the structure and content of a webpage by using a system of tags and attributes.

These tags define the various elements of a webpage such as headings, paragraphs, links, images, forms, and more. Web browsers interpret HTML documents and render them into visual web pages for users to view and interact with on the internet.

## What is Tag, Attributes, Elements, and content?

1.  Tag : Imagine tags like little instruction manuals for the web browser. They come in pairs, a start tag < and an end tag > with the element name in between. For example,
    < h1> is a start tag for a heading element, and </ h1> is its closing tag.

        Ex - img tag for image, p tag for paragraph, h1 to h6 for heading.

2.  Attributes : Attributes provide additional information about HTML elements and are always specified in the opening tag of an element. Attributes are made up of a name and a value, separated by an equal sign (=) and enclosed in double or single quotes. Attributes modify the behavior or appearance of an element.

    Ex : the href attribute in an < a> tag specifies the URL of the link, and the src attribute in an < img> tag specifies the source (URL) of an image.

3.  Content : This is the information that goes between the start and end tags of an element. It can be text, images, videos, or even other HTML elements (elements can be nested within each other). The content determines what the user sees or interacts with on the webpage.

    Ex : 
    ```
    <p>This is Paragraph Content</p>
    ```

4.  Elements : An element is a complete set of tags and their content, including the opening tag, closing tag, and any content nested within them. Together, they define a particular component or piece of content on a webpage.

    Ex : 
    ```
    <p>This is a Paragraph.</p>
    ```
### History of HTML
HyperText Markup Language (HTML) was initially developed by Sir Tim Berners-Lee in late 1991. It was designed as a standard language for creating and formatting documents on the World Wide Web. All the web pages on the internet are made from HTML.

### The Timeline of HTML's Evolution

|Year |	Progress|
|-----------------------------------|------------------------|
|1991 |	Tim Berners-Lee created HyperText Markup Language but it was not officially released.|
|1993 |	Tim Berners-Lee created the first version of HTML that was published and available to the public.|
|1995 |	HTML 2.0 was released with a few additional features along with the existing features.|
|1997 |	There was an attempt to extend HTML with HTML 3.0, but it was replaced by the more practical HTML 3.2. |
|1998 |	The W3C (World Wide Web Consortium) decided to shift focus to an XML-based HTML equivalent called XHTML. |
|1999 |	HTML 4.01, which became an official standard in December 1999, was the most widely used version in the early 2000s. |
|2000 |	XHTML 1.0, completed in 2000, was a combination of HTML4 in XML.|
|2003 |	The introduction of XForms reignited interest in evolving HTML itself rather than replacing it with new technologies. This new theory recognized that XML was better suited for new technologies like RSS and Atom, while HTML remained the cornerstone of the web.
2004 |	A W3C workshop took place to explore reopening HTML's evolution. Mozilla and Opera jointly presented the principles that later influenced HTML5.|
|2006 |	The W3C expressed interest in HTML5 development and formed a working group to collaborate with the WHATWG. The W3C aimed to publish a "finished" HTML5 version, whereas the WHATWG focused on a Living Standard, continuously evolving HTML.|
|2012 |	HTML5 can be seen as an extended version of HTML 4.01, which was officially published in 2012.|

## heading In HTML - Six heading tag

# h1 - Heading 1
## h2 - Heading 2
### h3 - Heading 3
#### h4 - Heading 4
##### h5 - Heading 5
###### h6 - Heading 6

# Q 1. Difference b/w b tag and strong tag, i tag and em tag?

# Fonts tag in HTML

1. **b tag:** The < b> tag is used to make text bold. However, it doesn't carry any semantic meaning and is purely presentational.
2. **strong tag:** Similar to < b>, the < strong> tag also makes text bold, but it carries semantic weight, indicating that the enclosed text is of strong importance.
3. **i tag:** The < i> tag is used to italicize text. Like < b>, it doesn't carry any semantic meaning and is purely presentational.
4. **em tag:** Similar to < i>, the < em> tag italicizes text, but it carries semantic weight, indicating emphasis.
5. **u tag:** The < u> tag underlines text.
6. **s tag:** The < s> tag is used for strikethrough text, indicating that the content is no longer accurate or relevant.
7. **del tag:** Similar to < s>, the < del> tag also represents strikethrough text, but it carries semantic weight, indicating deleted text.
8. **mark tag:** The < mark> tag highlights text with a background color, typically yellow.
9. **sup:** The < sup> tag is used for superscript text, often used for mathematical expressions.
10. **sub:** The < sub> tag is used for subscript text, typically used for footnotes or chemical formulas.

# Tag in HTML

**1. Semantic tag:** A semantic element clearly describes its meaning to both the browser and the developer.

-   Ex - < form> < table> < header> < footer> < article>

**2. Non-semantic tag:** < div> and < span> is non-semantic tag

**3. Block-Level Element:** Block-level elements typically start on a new line and occupy the full width available (by default). They force a line break before and after their content.

-   Ex: < header>, < nav>, < section>, < article>, < aside>, < main>, < footer>, < h1> to < h6> headings, < p>, < div>, < ul>, < ol>, < table>, < form>, < pre>, and < hr>

**4. Inline Element:** Inline elements typically display their content on the same line with surrounding text and only occupy the space needed for their content. They don't inherently create line breaks.

-   Ex: < span>, < b>, < i>, < strong>, < em>, < a>, < img>, < code>, < em>, < sup>, < sub>, < br>, and most emphasis and formatting tags.

| Feature     | Block-Level Elements                          | Inline Elements                                       |
| ----------- | --------------------------------------------- | ----------------------------------------------------- |
| Line Breaks | Force line breaks before and after by default | Don't inherently create line breaks                   |
| Width       | Occupy full available width (by default)      | Only occupy space needed for their content            |
| Stacking    | Can stack vertically on top of each other     | Can flow horizontally alongside other inline elements |

In HTML, there's a distinction between how tags are used depending on whether they represent elements that can contain content or not. Here's a breakdown of self-closing tags and separate closing tags:

**1. Self-Closing Tags:** These tags are written with a forward slash (/) directly following the element name and before the closing angle bracket (>). They represent elements that don't contain any content within them.

**Note:** While self-closing tags are valid in HTML, some stricter environments like XML might require them to be closed with separate tags (e.g., < br> instead of < br />).

-   Ex: < br/> (line break), < hr/> (horizontal rule), < img src="image.jpg" alt="Image description" /> (image), < input type="text" name="username" /> (form input field).

**2. Separate Closing Tags:** These involve an opening tag with the element name followed by a closing angle bracket (>), and a separate closing tag that starts with a forward slash (/) followed by the element name and a closing angle bracket (>). They represent elements that can contain content within them.

-   Ex: < p>This is a paragraph.< /p>, < b>Bold text< b/>
    < div>This is a section with content.< /div>

# List

-   **Definition :** In HTML, a list is a way to organize and display related pieces of content in a structured format. Lists are useful for presenting information in a clear and organized manner, making it easier for users to understand the relationships between different items.

## _Type of HTML List_

**1. Ordered List** An ordered list is defined using the < ol> tag in HTML. Each item within the list is defined using the < li> tag. By default, ordered lists display numbers (1, 2, 3...) to indicate the order of the items.

-   Tag: ol tag (ordered list), li tag (list item)
-   Attributes:
    -   type: This attribute specifies the numbering or lettering style used for the list items. Here are the common options:
        -   type="1" (default): Numbers the list items (1, 2, 3...)
        -   type="a": Lowercase alphabetical lettering (a, b, c...)
        -   type="A": Uppercase alphabetical lettering (A, B, C...)
        -   type="i": Lowercase Roman numerals (i, ii, iii...)
        -   type="I": Uppercase Roman numerals (I, II, III...)
    -   start: This attribute allows you to define a starting number or letter for the list. For example, start="4" would begin the list with "4" instead of "1".
    -   reversed: This attribute reverses the order of the numbering or lettering in the list.

**2. Unordered List:** An unordered list in HTML is used to represent a collection of items where the order doesn't necessarily matter. These lists are typically displayed with bullet points to visually group the items.

-   An unordered list is defined using the < ul> tag in HTML.
-   Each item within the list is defined using the < li> tag.
-   By default, unordered lists display bullet points (●, ◦, etc.) for each list item.
-   Tag: ul tag (unordered list),
-   Attribute:
    -   type="disc" (default): The standard disc bullet (●)
    -   type="circle": A circle bullet (○)
    -   type="square": A square bullet (■)
    -   type="none":  ()

**3. Definition List:** Definition lists in HTML provide a structured way to define terms and their corresponding meanings. They are essentially like mini-glossaries embedded within your web page.

-   Tag:
    -   < dl>: This tag marks the beginning of the definition list.
    -   < dt>: This tag defines the term being explained.
    -   < dd>: This tag defines the description or definition of the term.
-   Attribute:
    -   Definition lists are simple and don't have any specific attributes associated with their tags.
    -   The structure relies on the proper nesting of tags:
    -   The < dl> tag acts as a container for the entire definition list.
    -   Within < dl>, each term being defined is wrapped in a < dt> tag.
    -   The corresponding definition or description for the term goes inside a < dd> tag, always following the < dt> tag for the corresponding term.

# Image and Multimedia

**1. Image:** Used to embed images into a web page.
-   tag: < img /> tag
-   Attributes:
    -   src: (Required) Specifies the path to the image file.
    -   alt: (Highly recommended) Provides alternative text for the image, essential for accessibility and SEO.
    -   width: Sets the width of the image in pixels.
    -   height: Sets the height of the image in pixels.
    -   format: .jpg, .png, .gif

**2. Video:** Used to embed videos into a web page.
-   tag: video tag (Parent tag), source tag
-   Attributes:
    -   src: (Required) Specifies the path to the video file.
    -   controls: Adds playback controls (play, pause, volume, etc.).
    -   autoplay: Starts playback automatically (use with caution for accessibility).
    -   loop: Plays the video in a loop.
    -   muted: Mutes the video by default.
    -   type: Specifies the MIME type of the video file (optional, browser usually infers).
    -   poster: Sets an image to display before the video plays.
    -   width: Sets the width of the video player in pixels.
    -   height: Sets the height of the video player in pixels.
    -   format: .mp4, .webm, .ogg

**3. iframe:** Used to embed content from another website (like a YouTube video) directly into your web page.
-   tag: iframe
-   attributes:
    -   src: (Required) Specifies the URL of the content to embed.
    -   frameborder: Controls the display of a border around the iframe (0 for no border).
    -   scrolling: Controls whether scrollbars appear in the iframe (e.g., "auto", "yes", or "no").
    -   allowfullscreen: Enables fullscreen mode for the embedded content (if applicable).
    -   width: Sets the width of the iframe in pixels.
    -   height: Sets the height of the iframe in pixels.

**4. Audio:** Used to embed audio files into a web page.
    -   tag: audio tag < audio> & source tag < source/>.
    -   Attributes:
    -   src: (Required) Specifies the path to the audio file.
    -   controls: Adds playback controls (play, pause, volume, etc.).
    -   autoplay: Starts playback automatically (use with caution for accessibility).
    -   loop: Plays the audio in a loop.
    -   muted: Mutes the audio by default.
    -   type: Specifies the MIME type of the audio file (optional, browser usually infers).
    -   format: .mp3, .wav, .ogg

# Table

**Table:** Tables are a fundamental way to structure and present data in a two-dimensional format (rows and columns) on web pages. They are ideal for displaying information that has clear relationships between different categories.

-   Tag: < table>< /table>
-   Attributes:
    -   **border:** Sets the width of the table's border (in pixels).
    -   **cellpadding:** Defines the space between the cell content and its border (in pixels).
    -   **cellspacing:** Defines the space between adjacent cells (in pixels).
    -   **collapse:** Specifies how adjacent table borders should be rendered (e.g., collapse for merging borders).
    -   **width:** Sets the width of the table (can be a percentage or pixel value).
    -   **align:** Aligns the table within its container (e.g., left, center, right).

**Table Structure**

-   **```<table>:```** Defines the beginning and end of the table.
-   **```<tr>:```** Defines a table row. Each row contains cells.
-   **```<td>:```** Defines a table data cell. Used for regular table content.
-   **```<th>:```** Defines a table header cell. Typically used for column labels and styled differently (often bold and centered).

# FORM in HTML

**Form:** HTML forms are used to collect user input. They are defined using the < form> tag.
-   **Tag:**
    -   **Form tag:** Forms are created using the < form> element, which acts as a container for various form elements.
    -   **Label tag:** The **```<label>``` tag** defines a label for an ```<input>```, ```<select>```, ```<textarea>```, or ```<button>``` element. It improves accessibility by providing a clickable area that focuses its associated form element when clicked.
    -   **Attribute for label:**
        -   **for:** Specifies which form element a label is bound to. It should match the id attribute of the associated form element.
    -   **Input tag:** The ```<input>``` tag is used to create input fields within a form.
    -   **Attribute for input:**
        -   **type:** Specifies the type of input field. Common values include "text", "password", "checkbox", "radio", "submit", etc.
        -   **name:** Specifies the name of the input field. This is used to identify the field in the form submission.
        -   **value:** Specifies the initial value of the input field.
        -   **placeholder:** Specifies a short hint that describes the expected value of the input field (displayed when the field is empty).
        -   **required:** Specifies that the input field must be filled out before submitting the form.
        -   **disabled:** Specifies that the input field is disabled and cannot be edited.
        -   **readonly:** Specifies that the input field is read-only (cannot be edited by the user).
        -   **maxlength:** Specifies the maximum number of characters allowed in the input field.
        -   **size:** Specifies the width of the input field, in characters.
        -   **autocomplete:** Specifies whether the browser should automatically complete the input value based on the user's input history.
        -   **autofocus:** Specifies that the input field should automatically get focus when the page loads.

**Type Attribute in input tag:**

-   **text:** A single-line text input field.
-   **password:** A text field where the input is obscured (usually as asterisks) for security purposes.
-   **checkbox:** A checkbox that allows users to select multiple options.
-   **radio:** A radio button that allows users to select only one option from a group of options.
-   **submit:** A button that submits the form data to the server.
-   **button:** A button that can trigger custom JavaScript functions.
-   **file:** A file upload field that allows users to select files from their device.
-   **email:** A text field intended for entering an email address.
-   **number:** A text field intended for entering a numerical value.

**Q1.** Create a form using HTML, form contain Name, Email, Password, Gender (Male, Female, Other), fav Language (HTML, CSS, JavScript, React JS) and Submit Button.

**Q2.** Create a form - contain Name, email, password, DOB.

**Q3.** create  a profile using HTML, profile contain student Name, Education, DOB, Address and P-size Photo. detail about your education in detail, address in detail, hobby, interesst, skill, technology you know, project you completed in school and college.


## CSS - Cascading Style Sheet - 8th Oct

**CSS:** Which stands for Cascading Style Sheets, is a crucial language for web development. It defines how HTML elements are presented on a screen, in print, or on other media.

### Three way to style HTML Elements

**1. inline CSS:** Inline CSS involves embedding styles directly within the HTML element tags using the style attribute. While convenient for quick modifications, it can clutter your HTML code and make it difficult to maintain for larger projects.

**2. internal CSS:** Internal CSS styles are defined within the < head> section of your HTML document using the < style> tag. This approach offers more organization than inline CSS and keeps your styles within the HTML file.

**3. external CSS:** External CSS is the preferred method for larger websites. Styles are written in a separate CSS file (.css extension) and linked to your HTML documents using the < link> tag within the < head> section. This promotes code reusability and easier maintenance, as you can update the styles in one central location and have them reflected across all linked webpages.

```
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

P - Inline > Internal > External

## CSS Selector

**1. Universal Selector (*):**

-   **Definition:** The universal selector matches any element type and is often used as a base style for all elements in a document.
-   **Syntax:** Simply use an asterisk (*) as the selector.
-   **Points:**
    -   The universal selector applies styles to all elements in the document unless overridden by more specific selectors.
    -   It's commonly used to reset default browser styles or to set consistent default styles across all elements.
-   **Example:**
    ```
    .class_name {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```
    **2. group Selector:**
-   **Definition:** Group selectors allow you to apply the same styles to multiple selectors in a single declaration.
-   **Syntax:** Simply separate the selectors with commas.
-   **Points:**
    -   Group selectors help reduce redundancy in CSS code by combining multiple selectors that share the same styles.
    -   They improve code readability and maintainability by grouping related selectors together.
-   **Example:**
    ```
      h1, h2, h3{
        font-family: Arial, sans-serif;
      }
    ```

**3. Tag selector:**

-   **Definition:** Tag selectors target HTML elements based on their tag names.
-   **Syntax:** Simply use the tag name as the selector.
-   **Points:**
    -   Tag selectors apply styles to all elements of a particular tag type throughout the document.
    -   They are less specific than class or ID selectors and can be useful for applying broad styles to elements like paragraphs, headings, etc.
    -   Tag selectors can be combined with other selectors to make them more specific.
-   **Example:**
    ```
      p{
        font-size: 3em;
        border: 1px solid black;
      }
    ```
    **4. ID Selector: (#id_Name)**
-   **Definition:** ID selectors target HTML elements based on their unique ID attribute. IDs should be unique within a document, and each element should have only one ID.
-   **Syntax:** To select elements by ID, use a hash (#) followed by the ID name: #idname.
-   **Points:**
    -   IDs have higher specificity compared to classes, meaning they override class styles.
    -   IDs should be unique within a document, as using the same ID for multiple elements can lead to unexpected behavior.
    -   Unlike classes, IDs should generally be used sparingly, typically for elements that are unique and not repeated.
-   **Example:**
    ```
      #header{
        font-size: 24px;
      }
    ```
    **5. Class Selector: (.class_Name)**
-   **Definition:** Class selectors target HTML elements based on their class attribute. The class attribute can be applied to multiple elements, allowing you to style multiple elements with a single class.
-   **Syntax:** To select elements by class, use a period **(.)** followed by the class name: **.classname**.
-   **Points:**
    -   Classes are reusable and can be applied to multiple elements throughout a document.
    -   You can apply multiple classes to a single element by separating them with spaces in the HTML attribute.
    -   Class selectors have lower specificity compared to ID selectors, meaning they are overridden by IDs.
-   **Example:**
    -   ```
        .button{
          color: blue;
          font-size: 2em;
        }
        ```

**Q1. Heading with h3 and color is green and font size id 100px; (use class, A to M, ID N - Z)**

### Font Properties in CSS
| **Property**      | **Definition**   | **Example**  |
| ----------------- | ---------------- | -------------|
| `font-family`     | Specifies the font type for text. Can list multiple fonts as fallback.| `font-family: Arial, sans-serif;`|
| `font-size`       | Defines the size of the text.   | `font-size: 16px;` |
| `font-style`      | Defines the text style — normal, italic, or oblique. | `font-style: italic;` |
| `font-weight`     | Sets the thickness (boldness) of the text. | `font-weight: bold;` or `font-weight: 700;` |
| `font-variant`    | Displays text in small-caps (uppercase letters in smaller size).  | `font-variant: small-caps;`  |
| `font-stretch`    | Makes text wider or narrower. | `font-stretch: expanded;` |
| `font`            | Shorthand property to set font-style, font-variant, font-weight, font-size, line-height, and font-family in one line. | `font: italic bold 16px/1.5 Arial, sans-serif;` |
| `line-height`     | Controls the space between lines of text. | `line-height: 1.5;`   |
| `letter-spacing`  | Adjusts the space between letters. | `letter-spacing: 2px;` |
| `word-spacing`    | Adjusts the space between words.  | `word-spacing: 5px;`  |
| `text-transform`  | Controls capitalization of text.  | `text-transform: uppercase;`  |
| `text-decoration` | Adds decoration like underline, overline, or line-through. | `text-decoration: underline;` |
| `text-align`      | Aligns text horizontally.| `text-align: center;` |
| `text-shadow`     | Adds shadow effects to text. | `text-shadow: 2px 2px 4px gray;` |

### Background Properties in CSS
| **Property**            | **Definition**     | **Example**     |
| ----------------------- | ------------------------------------------| --------------------------------------------------- |
| `background-color`      | Sets the background color of an element.     | `background-color: lightblue;`   |
| `background-image`      | Sets a background image for an element.  | `background-image: url('bg.jpg');`   |
| `background-repeat`     | Controls if/how the background image repeats. | `background-repeat: no-repeat;`   |
| `background-position`   | Defines the starting position of the background image.  | `background-position: center top;`                  |
| `background-size`       | Defines the size of the background image.     | `background-size: cover;`                           |
| `background-attachment` | Defines whether the background scrolls or stays fixed. | `background-attachment: fixed;`                     |
| `background-origin`     | Defines the area within which the background image is painted (border-box, padding-box, content-box). | `background-origin: content-box;` |
| `background-clip`       | Determines how far the background extends (border-box, padding-box, content-box). | `background-clip: padding-box;`                     |
| `background-blend-mode` | Blends the background image with the background color. | `background-blend-mode: multiply;`                  |
| `background`            | Shorthand for all background properties in one line.   | `background: url('bg.jpg') no-repeat center/cover;` |



### Box-Model

The CSS box model is a fundamental concept in web design that defines how elements are structured and positioned on a web page. It's essentially a mental model that browsers use to render HTML elements on the screen. Understanding this model is crucial for building well-structured and visually appealing websites.

1. **Content:** This is the core area where your element's actual content resides. It can be text, images, videos, or any other web content. You can control the size of this area using the width and height properties in CSS.
2. **Padding:** Padding creates a transparent inner layer around the content. It adds space between the content and the border of the element. Padding is defined using the padding property, which accepts values for all four sides (top, right, bottom, left) or horizontally and vertically.
    - Padding can be set using properties like **padding-top,** **padding-right,** **padding-bottom,** and **padding-left**.
3. **Border:** The border surrounds the content and padding, providing a visual separation from other elements on the page. You can control the style (solid, dashed, dotted), color, and thickness of the border using properties like border-style, border-color, and border-width.
    - You can set border properties using **border-width**, **border-style**, and **border-color**.
4. **Margin:** Margin creates a transparent outer layer around the entire box (content, padding, and border). It adds space between the element and its neighboring elements. Margins are defined using the margin property, similar to padding.
    - Margin properties include **margin-top**, **margin-right**, **margin-bottom**, and **margin-left**.

**Benefits of the Box Model:**

-   **Precise control over element layout:** The box model allows you to define clear separations between elements using margins and padding.
-   **Responsive design:** By understanding how box model properties interact, you can create layouts that adapt to different screen sizes.
-   **Consistent visual appearance:** The box model ensures a consistent way for browsers to render elements across different platforms.

**Q. calculate height and width of card, in box-sizing border box, height is 300px, width is 350px, border, margin and padding is 20px each.**

# Box-Shadow and Text-Shadow in CSS

**1. Text Shadow:** The text-shadow property adds shadow to the text of an element. It creates a shadow effect behind the text to make it stand out or give it a more visually appealing appearance.

-   **CSS Property:**

`text-shadow: [horizontal offset] [vertical offset] [blur radius] [color];`

-   **Horizontal Offset:** It specifies the horizontal distance of the shadow from the text. A positive value moves the shadow to the right, while a negative value moves it to the left.
-   **Vertical Offset:** It specifies the vertical distance of the shadow from the text. A positive value moves the shadow downwards, while a negative value moves it upwards.
-   **Extra :**
    -   **Offset:** Defines how far the shadow is positioned horizontally (x-axis) and vertically (y-axis) from the text. Values can be positive, negative lengths (px, em, rem), or percentages.
-   **Blur Radius:** It specifies the amount of blur applied to the shadow. A higher value creates a more blurred shadow effect.
-   **Color:** It specifies the color of the shadow. You can use color names, hexadecimal, RGB, RGBA, HSL, or HSLA values to define the color.
-   **Example:**

```
h1 {
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.5);
}
```

**2. Box-Shadow:** The box-shadow property adds shadow effects to an element's box (such as a < div>). It creates a shadow behind the box, giving it depth and dimensionality.

**CSS Property:**

```
box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color] [inset];
```

-   **Horizontal Offset:** It specifies the horizontal distance of the shadow from the box. Positive values move the shadow to the right, and negative values move it to the left.
-   **Vertical Offset:** It specifies the vertical distance of the shadow from the box. Positive values move the shadow downwards, and negative values move it upwards.
-   **Blur Radius:** It specifies the amount of blur applied to the shadow. Higher values create a more blurred shadow effect.
-   **Spread Radius:** It specifies the spread of the shadow. Positive values expand the shadow, while negative values shrink it. This property is optional.
-   **Color:** It specifies the color of the shadow, using the same color value formats as text-shadow.

```
box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.5);
```

## Day 15th Oct 2025

# CSS Position

The **position** property in CSS governs how an HTML element is positioned within a document's layout. It offers five distinct values that control the element's placement relative to its usual flow in the document or the viewport (the visible area of the browser window).

**1. Static - (Default):**
-   Elements with **position: static** (the default) occupy their standard position in the document's flow, meaning they're laid out one after another in the order they appear in the HTML code.
-   The **top**, **right**, **bottom**, and **left** properties have no effect on statically positioned elements.

```
    .static-element {
        position: absolute;
        top: 50px;
        right: 0;
    }
```

**2. Absolute**
    - Elements with position: absolute are removed from the document's flow and positioned relative to their nearest containing block (often the parent element or a block-level element like a < div>).
    - The top, right, bottom, and left properties are used to specify the absolute position of the element within its containing block.
    - Absolutely positioned elements create gaps in the document's flow where they would have been without absolute positioning.

```
    .absolute-element {
      position: absolute;
      top: 50px;
      right: 0;
    } 
```

**3. Relative**
   - Elements with position: relative remain in the document's flow but can be shifted relative to their original position using the top, right, bottom, and left properties.
   - These offset values are applied relative to the element's original position, not the viewport or any containing element.
   - Elements retain their place in the normal flow but can be offset using top, bottom, left, and right properties.
   - Offsets are relative to the element's original position in the flow.
  
```
    .relative-element {
        position: relative;
        top: 50px; 
        left: 20px;  
    } 
```

**4. Sticky**
    - Combines aspects of relative and fixed.
    - Behaves like relative until it reaches a specific scroll position.
    - Then "sticks" to the viewport like fixed.
    - Useful for headers that stay visible until a certain point.

```
    .sticky-element {
        position: sticky;
        top: 5px; 
        left: 0;  
    } 
```

**5. Fixed**
    - The element is removed from the normal document flow and positioned relative to the viewport. It stays in the same position even if the page is scrolled.
    - Positioned relative to the viewport and remains fixed even when scrolling.
    - Useful for navigation bars or sidebars that stay visible.
    - Uses top, right, bottom, and left properties for positioning.
```
    .fixed-element {
        position: fixed;
        top: 0;   
        left: 0;
    }
```



### Ways to Add Color in CSS
**There are six main ways to specify colors in CSS:**

**1. Named Colors**
    Use predefined color names like red, blue, green, etc.

```
    .color-name {
        color: blue;
    }
```

**2. HEX Code**
A 6-digit or 3-digit hexadecimal value defining RGB colors.
```
    .hex-color {
        color: #ff0000; /* red */
    }
```

**3. RGB(Red, Green, Blue)**
Defines color using RGB values (0–255).
```
    .rgb-color {
        color: rgb(255, 0, 0); /* red */
    }
```

**4. RGBA (RGB + Alpha)**
Adds transparency using the alpha value (0 = transparent, 1 = opaque).
```
    .rgba-color {
        color: rgba(255, 0, 0, 0.5); /* semi-transparent red */
    }
```

**5. HSL (Hue, Saturation, Lightness)**
Defines color in terms of hue (color wheel), saturation (%), and lightness (%).
```
    .hsl-color {
        color: hsl(0, 100%, 50%); /* pure red */
    }
```

**6. HSLA (HSL + Alpha)**
Adds transparency to HSL colors.
```
    .hsla-color {
        color: hsla(0, 100%, 50%, 0.5); /* semi-transparent red */
    }
```
## Day 16th Oct 2025

### CSS Gradients
A gradient is a smooth transition between two or more colors. CSS supports two main types of gradients: Linear and Radial, along with Conic gradients (CSS3 feature).

**1. Linear Gradient**
    Creates a gradient that transitions colors along a straight line (horizontal, vertical, or diagonal).
    Defined using the linear-gradient() function.
    You can specify direction (to right, to bottom, 45deg, etc.) and multiple color stops.
```
    .linear-gradient {
        background: linear-gradient(to right, red, yellow);
    }
```

  **Key Points:**
- Default direction is top to bottom.
- You can use multiple colors.
- Can include angles like linear-gradient(45deg, blue, pink).

**2. Radial Gradient**
    Creates a circular or elliptical color transition from the center outward.
    Defined using radial-gradient() function.
    Colors spread from a central point outward to the edges.
```
    .radial-gradient {
        background: radial-gradient(circle, red, yellow, green);
    }
```

   **Key Points:**
- Shape can be circle or ellipse.
- You can specify the position (e.g., at center, at top right).
- Multiple color stops are supported.

**3. Conic Gradient (CSS3)**
    Creates a gradient that rotates around a center point (like a pie chart).
    Defined using conic-gradient().
```
    .conic-gradient {
        background: conic-gradient(from 90deg, red, yellow, green);
    }
```

   **Key Points:**
- Gradients rotate around the center.
- Great for pie charts, color wheels, and circular patterns.
- You can control the starting angle with from <angle>.

**4. Repeating Gradients**
    You can repeat gradients for striped or patterned effects using:
```
    repeating-linear-gradient(),
    repeating-radial-gradient(),
    repeating-conic-gradient(),


    .repeating-gradient {
        background: repeating-linear-gradient(45deg, red, yellow 10%, red 20%);
    }
```

### CSS Display Flex
The display: flex property in CSS is used to create a flex container that enables a flexible and responsive layout structure.
It provides powerful alignment and spacing capabilities without using floats or positioning.

When you set `display: flex` on a container, all its direct child elements become flex items.

**1. display: flex — Definition:**
- Defines a flex container that arranges its children (flex items) along a main axis (horizontal by default) and a cross axis (vertical).
- The main goal of Flexbox is to provide a more efficient way to align and distribute space among items, even when their size is unknown or dynamic.
```
    .container {
        display: flex;
    }
```
**Key Features:**
- Align items vertically and horizontally easily.
- Supports wrapping of items.
- Provides equal space distribution between items.
- Great for responsive layouts.

**A. justify-content:** Defines how flex items are aligned along the main axis (horizontal by default).
```
    .container {
        justify-content: space-between;
    }
```

**Possible values:**
- **flex-start** → items align to the start of the main axis (default)
- **flex-end** → items align to the end
- **center** → items align to the center
- **space-between** → equal space between items
- **space-around** → equal space around items
- **space-evenly** → equal spacing on all sides

**B. align-items:** Defines how items are aligned along the cross axis (vertical by default).
```
    .container {
        align-items: center;
    }
```

**Possible values:**
- **stretch** → items stretch to fill container (default)
- **flex-start** → items align to the start of cross axis.
- **flex-end** → items align to the end.
- **center** → items align to the center
- **baseline** → items align according to their text baselines.

## Day 5th Nov 2025
### Display : Flex, flex-wrap : wrap | nowrap | wrap-reverse
- flex items try to fit into a single line — even if they overflow the container.
- The flex-wrap property tells the container whether flex items should stay in one line or wrap onto multiple lines.
```
flex-wrap: nowrap | wrap | wrap-reverse;
```

### Property Values Explained
**1. nowrap (Default)**
- ➡️ All flex items will be on one single line.
- If they overflow, they will just go outside the container.
```
.container {
  display: flex;
  flex-wrap: nowrap;
}
```

**Behavior:**
- Items will shrink to fit if possible.
- If items are too wide, they overflow the container.
- Common default behavior.

**2. wrap**
- ➡️ Flex items will wrap onto multiple lines — from top to bottom (in normal flow).
```
.container {
  display: flex;
  flex-wrap: wrap;
}
```
**Behavior:**
- If items don’t fit on one line, they automatically move to the next line.
- Each new line acts as a new flex line.
**Use case:** Great for responsive layouts where you want cards, boxes, or buttons to wrap automatically as screen size changes.

**3. wrap-reverse**
- ➡️ Works like wrap, but the wrapping direction is reversed (bottom to top).
```
.container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

**Behavior**:
- Items wrap into multiple lines in reverse order — starting from the bottom of the container.

**🧾 Summary Table**
| Value | Description |
|-------|-------------|
|nowrap |Items stay on one line (default).|
|wrap   | Items wrap to the next line (top → bottom).|
|wrap-reverse | Items wrap in reverse order (bottom → top).|

# Display Grid

**Grid:** CSS Grid is a powerful layout system that allows you to create flexible, two-dimensional grids of elements on a web page. It offers a more intuitive and efficient way to structure complex layouts compared to traditional methods like floats or tables.

**Key benefits:**
-   **Responsive design:** Grid layouts adapt seamlessly to different screen sizes, making your website responsive and user-friendly across devices.
-   **Precise control:** You have fine-grained control over the placement and sizing of grid items, enabling intricate and visually appealing layouts.
-   **Flexibility:** Grid layout properties can be combined effectively to achieve a wide variety of design goals.
-   **Semantic structure:** Encourages a more meaningful structure for your HTML content.

1. **Container Properties:**

-   **display: grid or display: inline-grid;:**
    -   Transforms an element into a grid container, the parent element that holds the grid items.
    -   grid is for block-level elements, while inline-grid allows inline elements to behave as grid containers.

1. **Grid Lines and Tracks:**

-   **grid-template-columns and grid-template-rows:**
    -   Define the explicit sizing and number of grid tracks (columns and rows). You can specify values in pixels (px), percentages (%), or fractions (fr).
    -   Example: 
```
    .grid-container { 
        display: grid; 
        grid-template-columns: repeat(3, 1fr); 
        grid-template-rows: 200px auto; 
    } 
```
(Creates three equal-width columns and two rows: a fixed-height first row and an auto-height second row)  

-   **grid-auto-columns and grid-auto-rows:**
    -   Determine the implicit (default) size of grid tracks when explicit values haven't been set for grid-template-columns or grid-template-rows.
    -   Example: 
```    
.grid-container { 
    display: grid; 
    grid-auto-columns: minmax(200px, 1fr); 
} 
```
(Sets a minimum width of 200px for columns and switches to a flexible fraction layout if there's enough space)

1. **Grid Item Placement:**
    - **grid-column-start, grid-column-end, grid-row-start, and grid-row-end:**
        - Specify the grid lines on which a grid item should start and end, controlling its placement within the grid.
        - (Places item1 starting at the first column and first row, spanning two columns)
        - Example: 
```    
    .item1 { 
        grid-column-start: 1; 
        grid-row-start: 1; 
        grid-column-end: span 2; 
    } 
```
- **grid-column and grid-row (shorthand):**
    - Combine grid-column-start and grid-row-start into a single property for simpler positioning.
    - Example: 
```
    .item2 { 
        grid: 2 / span 2; 
    } 
```
(Places item2 starting at the second row and spanning two columns)
1. **Grid Gaps:**
    - **row-gap and column-gap:**
        - Define the spacing between grid rows and columns, respectively.
        - (Sets 20px spacing between rows and 10px spacing between columns)
        - Example: 
```
.grid-container { 
    display: grid;
    row-gap: 20px;
    column-gap: 10px;
} 
```
   - **gap (shorthand):**
        - Combines row-gap and column-gap into one property for convenience.
        - (Sets a 15px gap between both rows and columns).
        - Example: 
```    
    .grid-container { 
        display: grid; 
        gap: 15px; 
    } 
```
## Day - 6th Nov 2025

# Pseudo Selector
In CSS, a pseudo-selector (often referred to as a pseudo-class or pseudo-element) is a keyword added to a selector that specifies a special state of the selected elements. Pseudo-selectors allow you to style elements based on their state or position in the document tree without needing to add additional classes or IDs to the HTML.

**Two main type of Pseudo selector**

**1. pseudo class:** Pseudo-classes are used to define the special states of an element.
   + **:hover:** Styles an element when the mouse pointer is over it.
   + **:focus:** Styles an element when it has focus (e.g., when an input field is selected).
   + **:first-child:** Styles the first child of a parent element.
   + **:last-child:** Styles the last child of a parent element.
   + **:nth-child:** Styles the nth child of a parent element.
   + **Ex:** :active, :checked, :disable, :empty, :enable, :fullscreen, :link,  
- **Uses of Pseudo-Classes:** 
  - Improve user experience by visually indicating element states (like hover or active buttons).​
  - Differentiate the styling of links based on their visit state.
  - Target forms and validation states (like :required, :invalid).
  - Select elements based on their position in the HTML (like :first-child).

- **Drawbacks of Pseudo-Classes**
    - Cannot be used to target non-existing states or styles that require DOM manipulation.
    - Some pseudo-classes may not be supported in old browsers.​

**2. pseudo element:** Pseudo-elements are used to style specific parts of an element. 
+ **::before:** Inserts content before the content of an element.
+ **::after:** Inserts content after the content of an element.
+ **::first-letter:** Styles the first letter of a block element.
+ **::first-line:** Styles the first line of a block element.
+ **::marker** — targets the marker box of a list item

- **Uses of Pseudo-Elements**
  - Create decorative effects or icons using ::before and ::after without adding extra HTML.​
  - Style only the first line or first letter of a paragraph for typographic effects.​
  - Style selection highlights (::selection) or list bullet markers (::marker).

- **Drawbacks of Pseudo-Elements**
    - They only operate on specific parts of elements; not every visual effect is possible.
    - Limited interactivity compared to real DOM elements — can’t be directly manipulated by JavaScript.​
    - Some pseudo-elements have browser compatibility issues or subtle differences in how they're rendered.

# Transition in CSS
**Definition:** Transitions are a powerful CSS feature that allows you to smoothly animate changes between different style values for an element. This creates a more visually appealing and user-friendly experience when elements on your web page change states (e.g., hovering over a button, clicking a link, changing page sections).

+ **CSS Transition Properties**
**1. transition-property:** Specifies the name of the CSS property the transition effect is for.
**2. transition-duration:** Defines how long the transition takes to complete.
**3. transition-timing-function:** Specifies the speed curve of the transition effect. This property allows for customization of the acceleration and deceleration of the transition.
    1. ease (defalut): starts slow, then fast, then ends slow
    2. linear
    3. ease-in
    4. ease-out
    5. ease-in-out
    6. cubic-bezier(n,n,n,n)
**4. transition-delay:** Specifies a delay before the transition starts.
**You can combine all the transition properties into a single shorthand property called transition**
1. transition : property duration timing-function delay;

# Animation in CSS
**Definition:** CSS animations allow you to animate the transition of CSS properties over time. They can be used to create smooth transitions, keyframe animations, and more.

**Properties of CSS Animation:**
1. Keyframe: Defines the animation's intermediate steps.
```
@keyframes animationName {
    0% { 
        /* Initial state */ 
    }
    50% { 
        /* Intermediate state */ 
    }
    100% { 
        /* Final state */ 
    }
}
```

**2. Animation Name:** Specifies the name of the @keyframes animation to apply to the element.

**3. Animation Duration:** Specifies the duration of the animation.

**4. animation-timing-function:** Specifies the speed curve of the animation.
   1. linear
   2. ease
   3. ease-in
   4. ease-out
   5. ease-in-out
   6. cubic-bezier(n,n,n,n).

**5. Animation-delay:** Specifies a delay before the animation starts.
**6. animation-iteration-count:** Specifies the number of times the animation should be played.
- Possible values: infinite, any number.
**7. animation-direction:** Specifies whether the animation should play in reverse on alternate cycles.
- Possible Value: normal, reverse, alternate, alternate-reverse
**8. animation-fill-mode:** Specifies how a CSS animation should apply styles to its target before and after it is executing.
- Possible values: none, forwards, backwards, both.
**9. animation-play-state:** Specifies whether the animation is running or paused.
- Possible values: running, paused.


## Project 1 - Student create a portfolio using HTML, CSS and JavaScript - (deadline - 15th Dec 2025)

## Project 2 - Create a Project based on DOM Manipulation (Digital Clock) - (Deadline - 15th Dec 2025)