import report from 'multiple-cucumber-html-reporter'
import { reporterConfig } from '../config/reporter.config'

report.generate(reporterConfig)
