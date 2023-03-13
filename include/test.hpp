#ifndef DEPLOYMENTTEST_TEST_HPP
#define DEPLOYMENTTEST_TEST_HPP

#include <string>

/**
 * @file
 *
 * The main Deployment Test file
 */

/**
 * Major version number of the Library
 */
#define DEPLOYTEST_VERSION_MAJOR    0
/**
 * Minor version number of the Library
 */
#define DEPLOYTEST_VERSION_MINOR    11
/**
 * Revision version number of the Library
 */
#define DEPLOYTEST_VERSION_REVISION 2
/**
 * Pre-release suffix of the Library
 *
 * Use [semantic versioning](https://semver.org/) suffices with alpha characters
 * are compared by ASCII ordering; therefore `-DEV < -alpha < -beta < -rc`
 * providing `DEV` is uppercase and `alpha`, `beta`, and `rc` are all lower case.
 */
#define DEPLOYTEST_VERSION_SUFFIX "-DEV"

/**
 * The Deployment Test namespace
 */
namespace deploytest
{
    /**
     * The Deployment Test struct
     */
    class TestClass
    {
    public:
        /**
         * Creates an empty Test Class object
         */
        TestClass();

        /**
         * Creates a Test Class with the specified name
         *
         * @param name The name for the class
         */
        TestClass(const std::string& name);

        /**
         * Gets the name
         *
         * @return The name of the object
         */
        const std::string& Name() const { return m_name; }

        /**
         * Gets the object length
         *
         * @return The length of the object
         */
        std::size_t Length() const { return m_name.size(); }

    private:
        std::string m_name;
    };
}

#endif // DEPLOYMENTTEST_TEST_HPP
