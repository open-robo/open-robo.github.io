import React from "react";
import styles from './signup.module.css';

export function Signup() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <iframe className={styles.signup} data-tally-src="https://tally.so/embed/wd0RlK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="400" height="157" frameBorder="0" marginHeight={0} marginWidth={0} title="Subscribe to the OpenRobo mailing list" id="signup"></iframe>
  );
}