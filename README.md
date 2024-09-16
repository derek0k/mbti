# 과제 설명

> MBTI 테스트는 요즘 많은 사람들이 관심을 가지고 있는 주제이죠. MBTI 성격 테스트 어플리케이션을 통해서 여러분의 MBTI을 알아보세요!

# 시연영상

# 프로젝트 구조

```Scss
src/
├── components/
│ ├── AuthForm.jsx
│ ├── Layout.jsx
│ ├── ProtectedRoute.jsx
│ ├── TestForm.jsx
│ ├── TestResultList.jsx
│ ├── TestResultItem.jsx
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── Profile.jsx
│ ├── TestPage.jsx
│ └── TestResultPage.jsx
├── api/
│ ├── auth.js
│ └── testResults.js
├── data/
│ └── questions.js
├── App.css
├── App.jsx
├── index.css
├── main.jsx
│
db.json (json-server용)
package.json
tailwind.config.js
index.html
```

# 구성방법

1. Tailwind CSS 설치 및 설정

- Tailwind CSS 프로젝트에 설치하고 설정합니다:

```Shell
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- tailwind.config.js 파일을 열고 content 배열에 Tailwind가 사용할 파일 경로를 지정합니다:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- src/index.css 파일 최상단에 다음 내용을 추가합니다:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. JWT 인증 관련 API 연결

- src/api/auth.js 파일을 생성하고, JWT 인증 서버와 통신하는 코드를 작성:

```js
import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
```

3. 레이아웃 컴포넌트 작성
