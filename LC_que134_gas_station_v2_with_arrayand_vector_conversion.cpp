#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int canCompleteCircuit(vector<int> &gas, vector<int> &cost)
    {
        int totalgas = 0;
        int totalcost = 0;
        int tank = 0;
        int start = 0;

        for (int i = 0; i < gas.size(); i++)
        {
            totalgas = totalgas + gas[i];
            totalcost = totalcost + cost[i];
            tank = tank + gas[i] - cost[i];

            if (tank < 0)
            {
                start = i + 1;
                tank = 0;
            }
        }

        if (totalgas < totalcost)
        {
            return -1;
        }

        return start;
    }
};

int main()
{
    int n;
    cout << "Enter no. of Gas Stations: ";
    cin >> n;

    int gasArr[n];

    for (int i = 0; i < n; i++)
    {
        cout << "Enter Amount of Gas at " << i + 1<< " Station: ";
        cin >> gasArr[i];
    }

    int costArr[n];

    for (int i = 0; i < n; i++)
    {
        cout << "Enter cost required to Reach " << i + 1 << " Station: ";
        cin >> costArr[i];
    }

    // used to convert arrays to vetor to feed the class ;
    vector<int> gas(gasArr, gasArr + n);
    vector<int> cost(costArr, costArr + n);

    Solution obj;
    int result = obj.canCompleteCircuit(gas, cost);

    cout << "Starting Station Index: " << result;

    return 0;
}