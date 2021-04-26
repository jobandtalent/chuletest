import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import dracula from 'prism-react-renderer/themes/dracula';

import styles from 'src/ui/Code/styles.module.css'

const Code = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "javascript"
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Highlight
          {...defaultProps}
          code={children}
          language={language}
          theme={dracula}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{ ...style, padding: "20px 0"}}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

export default Code
