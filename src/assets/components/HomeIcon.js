import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon=({Fill})=> {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 11 11"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5.5l-5 4.286v5c0 .394.32.714.714.714h2.857V8.357a1.429 1.429 0 112.858 0V10.5h2.857c.394 0 .714-.32.714-.714v-5L5.5.5z"
        fill={Fill||"#97929A"}
      />
    </Svg>
  )
}

export default HomeIcon
