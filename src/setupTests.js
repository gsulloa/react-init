/* eslint-disable import/no-extraneous-dependencies */
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

// this adds jest-dom's custom assertions
import serializer from 'jest-emotion'

expect.addSnapshotSerializer(serializer)
