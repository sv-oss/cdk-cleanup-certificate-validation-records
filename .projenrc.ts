import { awscdk, javascript, github } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Service Victoria',
  authorAddress: 'matteo.sessa@service.vic.gov.au',
  cdkVersion: '2.174.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.7.0',
  license: 'MIT',
  minNodeVersion: '20.17.0',
  name: 'cdk-cleanup-certificate-validation-records',
  minMajorVersion: 1,
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/sv-oss/cdk-cleanup-certificate-validation-records',
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  depsUpgradeOptions: {
    workflowOptions: {
      projenCredentials: github.GithubCredentials.fromApp({
        appIdSecret: 'CICD_APP_ID',
        privateKeySecret: 'CICD_APP_PRIVKEY',
      }),
      labels: ['deps-upgrade'],
    },
  },
  autoApproveOptions: {
    label: 'deps-upgrade',
    allowedUsernames: [
      'sv-oss-continuous-delivery[bot]',
    ],
  },
  dependabot: false,
  bundledDeps: [
    'async-await-retry',
    '@aws-sdk/client-acm',
    '@aws-sdk/client-route-53',
    '@types/aws-lambda',
  ],
  typescriptVersion: '~5.7.3',
  description: undefined,
  packageName: '@servicevic-oss/cdk-cleanup-certificate-validation-records',
});
project.synth();
