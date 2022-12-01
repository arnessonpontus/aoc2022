#include <fstream>
#include <iostream>
#include <string>
#include <vector>
#include <numeric>
#include <algorithm>

using namespace std;

vector<string> read_input() {
  vector<string> result;
  ifstream input_file("input.txt");
  string line;

  while (getline(input_file, line)) {
    result.push_back(line);
  }

  return result;
}

vector<int> get_elf_cals(vector<string> input) {
  vector<int> elf_cals;
  int elf_cal = 0;

  for(int i = 0; i < input.size(); i++) {
    bool is_last = i == input.size() - 1;

    if (input[i] == "" || is_last){
      if (is_last) {
        elf_cal = elf_cal + stoi(input[i]);
      }
      elf_cals.push_back(elf_cal);
      elf_cal = 0;
    } else {
      elf_cal = elf_cal + stoi(input[i]);
    }
  }
  return elf_cals;
}

int solve1(vector<string> input) {
  vector<int> v = get_elf_cals(input);
  sort(v.begin(), v.end());
  return v[v.size()-1];
}

int solve2(vector<string> input) {
  vector<int> v = get_elf_cals(input);
  sort(v.begin(), v.end());
  return accumulate(v.end()-3, v.end(), 0);
}

int main() {
  vector<string> input = read_input();

  cout << "C++" << endl;
  char* part = getenv("part");
  if (string(part) == "part2") {
    printf("%d\n", solve2(input));
  } else {
    printf("%d\n", solve1(input));
  }

  return 0;
}
