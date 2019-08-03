const emp =  require('../../src/handler/employee');

describe('employee handler test',  () => {
    test('should be able to test the file', async () => {
        const result = await emp.employeeList();
        expect(result).toBeDefined();
    })
});