# Deployment test

A test repository to test GitHub Actions to do the following:

  * Create release and publish Doxygen HTML documentation to a version
    specific subdirectory in the `gh-pages` branch
  * Publish the Doxygen for the *latest* (development) code to the `latest`
    subdirectory in the gh-pages branch
  * Create branches for patches to major.minor release builds

## Setup

Create the `gh-pages` branch for a repository:
```
git checkout --orphan gh-pages
git reset --hard
touch .nojekyll
git push origin gh-pages
```
