export const config = {
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.FRONT_URL || 'https://front.serverest.dev',
      show: false,
      browser: 'chromium',
      waitForTimeout: 5000,
      restart: false
    },
    REST: {
      endpoint: process.env.API_BASE || 'https://serverest.dev',
      defaultHeaders: {
        'Content-Type': 'application/json'
      }
    }
  },
  include: {
    I: './steps_file.ts',
    homePage: './src/web/pages/HomePage.ts',
    loginPage: './src/web/pages/LoginPage.ts',
    serverestApi: './src/api/ServerestApi.ts'
  },
  bootstrap: false,
  mocha: {
    reporterOptions: {
      reportDir: './output/mochawesome'
    }
  },
  name: 'codeceptjs-typescript-sdet-framework',
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/apiSteps.ts',
      './step_definitions/webSteps.ts'
    ],
  },
  plugins: {
    pauseOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'output/allure-results'
    }
  }
};
