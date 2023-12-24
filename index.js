import { getInput, setOutput, setFailed } from '@actions/core';
import moment from 'moment';

try {
    const name = getInput('name');
    console.log(`Hello, ${name}. We appreciate your business!`);
    const timestamp = moment().format();
    console.log(`Greeting issued at: ${timestamp}`);
    setOutput("timestamp", timestamp);
} catch (error) {
    setFailed(error.message);
}