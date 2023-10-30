<a name="readme-top"></a>

<div align="center">

  <h3><b>Hello-Rails-React</b></h3>

</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
- [👤 Author](#author)
- - [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

# 📖 Hello-Rails-React <a name="about-project"></a>

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
    <li><a href="https://reactjs.org/">React</a></li>
</details>
<details>
  <summary>Server</summary>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
    <li><a href="https://rubyonrails.org/">Rails</a></li>
</details>
<details>
  <summary>Database</summary>
    <li><a href="https://www.postgresql.org/">Postgres</a></li>
</details>

### Key Features <a name="key-features"></a>

- **Display random Greeting**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```sh
Code Editor (Vs Code)

Terminal

Install ruby on your computer

Install rails on your compute
```

### Setup

Clone this repository to your desired folder:

```sh
  git clone https://github.com/Yonashenok/hello-rails-react.git

  cd hello-rails-react

```

You need to setup database for these project

```
  development = your_dataabase_dev
  test        = your_datasebase_test
  production  = your_datasebase_prod
```

or you can use your own database and change the `config/database.yml`

```yml
default: &default
  adapter: postgresql
  encoding: unicode
  pool: 5

development:
  <<: *default
  database: [your_database_for_development]
  username: [your_username]
  password: [your_password]
  host: localhost
  port: 5432

test:
  <<: *default
  database: [your_database_for_test]
  username: [your_username]
  password: [your_password]

production:
  <<: *default
  database: [your_database_for_production]
```

### Install

Install this project with:

```bash
  bundle install

  npm install
  or
  yarn install
```

it will install the required gemfile for running the project

### Usage

To run the project, execute the following command on Your [Git Bash Terminal](https://git-scm.com/downloads):

```sh
 bin/dev
```

### Run tests

To run tests on linters, run the following command:

```sh
  npx stylelint "**/*.{css,scss}"
```

```sh
  rubocop
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👤 Author <a name="author"></a>

👤 **Yonas Henok**

- GitHub: [@YonasHenok](https://github.com/Yonashenok)
- Twitter: [@YonasHenok3](https://www.twitter.com/YonasHenok3)
- LinkedIn: [Yonas Henok](https://www.linkedin.com/in/yonas-henok/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Add More Functionality**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project please give it a Start ⭐️.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- Project from [Microverse](https://www.microverse.org/) FULL-STACK CAPSTONE Module.
- Thanks to the Microverse team for the great curriculum.
- Thanks to the Code Reviewer(s) for the insightful feedbacks.
- A great thanks to My coding partner(s), morning session team, and standup team for their contributions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ <a name="faq"></a>

- **Can I Fork it and Imporove on it**

  - Yes, You can, feel free.

- **Can I improve the repository, and my changes will be accepted if they are good?**

  - Yes please, nice ideas are welcome, please.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
