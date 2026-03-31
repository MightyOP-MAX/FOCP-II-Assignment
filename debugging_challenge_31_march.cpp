#include <iostream>
using namespace std;
int main() {
    ios::sync_with_stdio(false); // Fast I/O
    cin.tie(NULL);               // Untie cin/cout
     // Note: There are no errors in lines 4 and 5
    // Lines 4 and 5 used to make input and output faster.
    int T, N, x;
    cin >> T;
    while (T > 0) {
        cin >> N;
        int alive[500000], size = 0;
        for (int i = 0; i < N; i++) {
            cin >> x;
            alive[size++] = x;
            if (size && alive[size - 1] < x)
                size--;
            cout << size;
            if (i < N - 1) cout << " ";
        }
        cout << '\n';
        T--;
    }
}