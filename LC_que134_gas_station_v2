#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int canCompleteCircuit(vector<int> &gas, vector<int> &cost)
    {
        int totalGas = 0;
        int totalCost = 0;
        int tank = 0;
        int start = 0;

        for (int i = 0; i < gas.size(); i++)
        {
            totalGas = totalGas + gas[i];
            totalCost = totalCost + cost[i];

            tank = tank + gas[i] - cost[i];

            if (tank < 0)
            {
                start = i + 1;
                tank = 0;
            }
        }

        if (totalGas < totalCost)
        {
            return -1;
        }

        return start;
    }
};

int main()
{
    int gasArr[] = {1, 2, 3, 4, 5};
    int costArr[] = {3, 4, 5, 1, 2};
    int n = 5;

    // Convert array to vector
    vector<int> gas(gasArr, gasArr + n);
    vector<int> cost(costArr, costArr + n);

    Solution obj;
    int result = obj.canCompleteCircuit(gas, cost);

    cout << "Starting index: " << result;

    return 0;
}