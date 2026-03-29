#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int canCompleteCircuit(int gas[],int cost[] , int n) 
    {
        int totalGas = 0;
        int totalCost = 0;
        int tank = 0;
        int start = 0;

        for (int i = 0; i < n; i++) 
        {
            totalGas = totalGas + gas[i];
            totalCost = totalCost + cost[i];

            tank = tank + gas[i] - cost[i];

            if (tank < 0) 
            {
                start = i +1;
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

int main() {
    int gas[] = {1, 2, 3, 4, 5};
    int cost[] = {3, 4, 5, 1, 2};
    int n = 5;

    Solution obj;
    int result = obj.canCompleteCircuit(gas, cost, n);

    cout << "Starting index: " << result;

    return 0;
}