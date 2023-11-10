import report from 'multiple-cucumber-html-reporter'
import { config } from '../config/test.config'

report.generate({
  jsonDir: 'test-results/json',
  reportPath: 'test-results/reports',
  metadata: {
    browser: {
      name: config.browser,
      version: '120',
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '11',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Saucelab' },
      { label: 'Release', value: '0.0.1' },
      { label: 'Cycle', value: 'C001' },
    ],
  },
})
