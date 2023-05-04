"use client";

import { motion as m } from "framer-motion";
import { useTheme } from "next-themes";
import { FC } from "react";

interface LogoProps {
  className: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();

  const color = theme === "dark" ? "#FFFF" : "#000";

  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 500.000000 500.000000"
      className={className}
    >
      <m.g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <m.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
          d="M1874 4315 c-23 -35 -102 -246 -183 -488 l-36 -108 -60 44 c-188 136 -299 208 -320 205 -13 -2 -46 13 -79 35 -60 40 -91 44 -110 15 -8 -13 -6 -22 9 -39 19 -21 19 -22 2 -16 -66 24 -97 15 -97 -28 0 -32 61 -82 437 -363 136 -101 141 -106 131 -131 -10 -27 -65 -213 -99 -336 -20 -76 -24 -135 -10 -150 5 -6 11 -21 13 -35 2 -19 9 -25 28 -25 20 0 31 12 60 64 30 55 35 60 40 40 4 -14 14 -25 27 -27 41 -6 105 110 153 275 l21 72 97 -63 c53 -35 120 -74 147 -88 28 -13 72 -37 99 -53 50 -29 81 -27 81 6 0 8 11 16 25 19 38 8 38 45 2 84 -16 17 -33 41 -36 53 -4 12 -79 77 -171 148 -91 69 -165 133 -165 141 0 8 9 40 19 72 11 31 33 107 50 167 17 61 35 124 40 140 16 51 33 156 27 172 -4 9 -14 13 -26 10 -11 -3 -20 -4 -20 -2 0 1 9 31 20 65 36 111 21 174 -33 141 -14 -9 -22 -10 -30 -2 -17 17 -35 13 -53 -14z"
        />
        <m.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d="M3022 4258 c-7 -7 -12 -21 -12 -31 0 -17 -3 -16 -21 7 -21 26 -52 33 -78 17 -19 -12 -11 -61 37 -216 22 -71 56 -184 76 -250 20 -66 40 -129 45 -140 5 -11 16 -41 24 -66 l15 -46 -51 -39 c-103 -78 -263 -207 -299 -242 -26 -25 -38 -45 -38 -63 0 -15 -4 -31 -10 -34 -5 -3 -10 -17 -10 -31 0 -31 21 -31 94 1 31 14 58 25 60 25 2 0 1 -11 -2 -25 -12 -68 100 -33 243 75 l105 78 21 -46 c11 -26 30 -69 41 -97 11 -27 30 -70 43 -95 13 -25 37 -75 54 -112 23 -53 34 -68 51 -68 11 0 23 7 26 15 5 11 9 12 25 2 14 -9 24 -9 37 -1 26 17 26 159 0 239 -10 33 -34 110 -52 170 -18 61 -36 117 -40 125 -7 16 6 27 239 211 167 131 232 209 174 209 -16 0 -11 8 28 39 78 63 100 85 106 102 8 24 -8 42 -36 42 -19 0 -27 5 -29 21 -5 36 -46 22 -163 -55 -117 -77 -331 -228 -378 -266 l-29 -23 -62 183 c-70 203 -90 247 -111 247 -8 0 -20 20 -29 49 -26 88 -61 122 -94 89z"
        />
        <m.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d="M824 3396 c-12 -30 2 -50 53 -76 28 -15 74 -46 102 -69 l50 -42 -20 -38 c-23 -44 -58 -217 -60 -294 l-2 -52 -7 50 c-5 28 -9 105 -9 173 -1 97 -4 122 -15 122 -22 0 -36 -80 -36 -209 0 -137 22 -266 69 -411 l31 -94 -113 -115 c-63 -64 -121 -128 -131 -143 -17 -26 -15 -48 5 -48 6 0 66 57 134 127 l124 128 41 -88 c22 -48 58 -116 80 -151 22 -35 40 -66 40 -70 0 -4 -23 -41 -51 -82 -87 -130 -112 -204 -66 -204 16 0 35 19 73 78 28 42 59 92 70 110 10 17 21 32 24 32 3 0 15 -15 27 -33 27 -39 143 -161 195 -204 l37 -31 -29 -69 c-16 -37 -30 -74 -30 -80 0 -27 21 -11 62 47 23 33 46 60 50 60 5 0 32 -15 61 -34 28 -18 72 -44 96 -57 l44 -24 24 -110 c13 -60 35 -132 48 -160 13 -27 35 -95 49 -150 43 -179 117 -311 232 -414 75 -66 124 -89 229 -107 76 -13 95 -13 177 1 129 22 205 61 299 155 57 57 86 97 121 165 54 105 88 218 88 290 0 27 9 74 20 103 11 29 20 74 20 101 l0 48 48 18 c26 10 82 35 124 56 l77 39 40 -58 c49 -72 84 -105 108 -100 30 6 18 54 -34 130 -45 66 -47 71 -29 82 43 26 194 147 234 188 l42 44 60 -58 c59 -58 93 -72 104 -42 6 15 -56 117 -88 143 -22 19 -21 24 24 83 22 29 58 88 81 131 22 42 42 77 44 77 1 0 27 -16 55 -35 29 -20 55 -34 57 -31 3 2 -14 30 -38 61 l-42 56 51 107 c82 175 141 420 130 546 -5 67 -25 54 -38 -26 -12 -71 -49 -229 -56 -237 -2 -2 -1 50 2 115 4 76 2 135 -6 164 -6 25 -18 80 -26 124 -14 73 -13 79 3 92 18 13 77 34 99 34 6 0 19 9 29 20 18 20 18 21 -2 48 -19 24 -26 27 -84 27 -59 0 -69 -4 -125 -42 -67 -46 -114 -96 -175 -187 -35 -53 -39 -64 -39 -122 0 -35 3 -64 6 -64 18 0 97 69 120 104 15 23 43 61 63 86 l36 45 6 -60 c12 -106 9 -224 -5 -288 -8 -34 -22 -102 -31 -152 -19 -110 -55 -235 -67 -235 -4 0 -33 21 -64 46 -96 77 -133 99 -147 85 -9 -10 9 -33 87 -107 l99 -95 -16 -39 c-15 -40 -125 -200 -137 -200 -4 0 -48 44 -97 98 -50 53 -105 105 -122 115 -30 18 -31 18 -31 -1 0 -10 43 -76 95 -146 53 -70 93 -131 90 -136 -6 -10 -133 -113 -180 -146 -17 -12 -49 -31 -72 -43 l-42 -21 -64 93 c-71 101 -92 124 -101 108 -9 -14 20 -84 67 -164 22 -37 38 -69 36 -72 -7 -6 -172 -71 -239 -93 -95 -32 -270 -69 -390 -83 -226 -26 -543 10 -621 71 -20 16 -99 61 -175 100 -76 39 -144 76 -151 83 -9 9 0 37 45 124 53 105 62 142 27 113 -8 -7 -40 -52 -71 -101 -31 -49 -60 -89 -65 -89 -14 0 -222 213 -238 243 -13 25 -12 31 7 66 43 75 20 109 -31 46 -15 -19 -31 -35 -35 -35 -7 0 -82 116 -137 213 l-28 49 67 67 c61 62 80 91 57 91 -6 0 -39 -25 -75 -55 l-64 -55 -21 62 c-29 86 -30 304 -1 438 11 51 20 97 20 102 0 18 17 5 48 -36 27 -36 101 -86 127 -86 12 0 3 95 -12 127 -9 20 -53 72 -98 117 -68 69 -93 88 -157 114 -82 34 -145 41 -154 18z m2075 -1770 c-13 -11 -178 -57 -236 -66 -71 -10 -170 -13 -162 -5 3 2 57 12 120 20 63 8 150 26 194 39 71 20 97 24 84 12z m-1065 -82 c3 -9 6 -24 6 -35 0 -10 7 -19 15 -19 8 0 15 6 15 14 0 8 3 17 8 20 4 2 8 -44 9 -102 0 -59 6 -134 12 -166 6 -33 9 -61 8 -63 -2 -2 -18 50 -36 114 -18 65 -41 132 -50 148 -23 41 -28 105 -8 105 8 0 18 -7 21 -16z m219 -65 c44 -11 119 -26 166 -33 l86 -12 11 -150 c11 -164 21 -194 66 -194 44 0 52 27 44 165 -3 66 -9 129 -12 141 -5 20 -1 21 93 28 88 6 169 16 261 31 30 6 32 4 32 -23 0 -16 -7 -68 -15 -116 -40 -227 -135 -391 -263 -453 -49 -23 -70 -27 -142 -27 -94 0 -137 16 -206 76 -88 78 -178 270 -202 433 -22 143 -22 155 -11 155 6 0 47 -9 92 -21z m896 -96 c-5 -41 -22 -100 -40 -140 -16 -37 -28 -57 -24 -43 3 14 11 63 17 110 7 47 17 88 24 92 6 4 15 20 18 34 12 46 14 22 5 -53z"
        />
      </m.g>
    </m.svg>
  );
};

export default Logo;
