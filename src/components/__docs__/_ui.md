All Components inherit from the `src/GlobalStyle` file that exposes some CSS class utilities for all components:

**Available global "classNames" :**

| className                | description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| **--**                   | **Responsive hiding classnames:**                                |
| sp-hide-xs               | Hide element until the screen size xs                            |
| sp-hide-sm               | Hide element until the screen size sm                            |
| sp-hide-md               | Hide element until the screen size md                            |
| sp-hide-lg               | Hide element until the screen size lg                            |
| sp-hide-xl               | Hide element until the screen size xl                            |
| **--**                   | **Responsive showing classnames:**                               |
| sp-show-xs               | Show element only until the screen size xs (hide after)          |
| sp-show-sm               | Show element only until the screen size sm (hide after)          |
| sp-show-md               | Show element only until the screen size md (hide after)          |
| sp-show-lg               | Show element only until the screen size lg (hide after)          |
| sp-show-xl               | Show element only until the screen size xl (hide after)          |
| **--**                   | **Placement classnames:**                                        |
| sp-center                | Display the item in the exact middle                             |
| sp-column                | Display the items in column                                      |
| **--**                   | **Box styling:**                                                 |
| sp-radius                | Apply a default border-radius to the element                     |
| sp-radius-hight          | Apply an augmented border-radius to the element                  |
| sp-shadow                | Apply a default box-shadow to the element                        |
| sp-shadow-high           | Apply an increased box-shadow to the element                     |
| sp-text-shadow           | Apply a default text-shadow                                      |
| sp-disabled              | Apply a default disabled style (color and border) to the element |
| **--**                   | **Background colors:**                                           |
| sp-light                 | background color light                                           |
| sp-dark                  | background color dark                                            |
| sp-primary               | background color primary                                         |
| sp-secondary             | background color secondary                                       |
| sp-info                  | background color blue                                            |
| sp-success               | background color green                                           |
| sp-warning               | background color orange                                          |
| sp-danger                | background color red                                             |
| **--**                   | **Light background colors:**                                     |
| sp-light-primary         | background color light primary with blue font & border colors    |
| sp-light-secondary       | background color light secondary with blue font & border colors  |
| sp-light-info            | background color light blue                                      |
| sp-light-success         | background color light green                                     |
| sp-light-warning         | background color light orange                                    |
| sp-light-danger          | background color light red                                       |
| **--**                   | **Hollow background with font & borders colors:**                |
| sp-light + sp-hollow     | background color transparent with light font & border colors     |
| sp-dark + sp-hollow      | background color transparent with dark font & border colors      |
| sp-primary + sp-hollow   | background color transparent with primary font & border colors   |
| sp-secondary + sp-hollow | background color transparent with secondary font & border colors |
| sp-info + sp-hollow      | background color transparent with blue font & border color       |
| sp-success + sp-hollow   | background color transparent with green font & border color      |
| sp-warning + sp-hollow   | background color transparent with orange font & border color     |
| sp-danger + sp-hollow    | background color transparent with red font & border color        |
