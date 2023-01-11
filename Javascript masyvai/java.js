// 1.  Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200.
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        char[] letters = { 'A', 'B', 'C', 'D'};
        char[] randomArray = new char[200];
    Random rand = new Random();

        for (int i = 0; i < randomArray.length; i++) {
            randomArray[i] = letters[rand.nextInt(letters.length)];
        }

        System.out.println(randomArray);
    }
}

// 1.2. Suskaičiuokite kiek yra kiekvienos raidės. 
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        char[] letters = { 'A', 'B', 'C', 'D'};
        char[] randomArray = new char[200];
    Random rand = new Random();

        for (int i = 0; i < randomArray.length; i++) {
            randomArray[i] = letters[rand.nextInt(letters.length)];
        }

        HashMap < Character, Integer > letterCounts = new HashMap < Character, Integer > ();
        for (char c : randomArray) {
            if (!letterCounts.containsKey(c)) {
                letterCounts.put(c, 1);
            } else {
                letterCounts.put(c, letterCounts.get(c) + 1);
            }
        }

        System.out.println(letterCounts);
    }
}

// 2. Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        char[] letters = { 'A', 'B', 'C', 'D'};
        char[] randomArray = new char[200];
    Random rand = new Random();

        for (int i = 0; i < randomArray.length; i++) {
            randomArray[i] = letters[rand.nextInt(letters.length)];
        }

        HashMap < Character, Integer > letterCounts = new HashMap < Character, Integer > ();
        for (char c : randomArray) {
            if (!letterCounts.containsKey(c)) {
                letterCounts.put(c, 1);
            } else {
                letterCounts.put(c, letterCounts.get(c) + 1);
            }
        }

        System.out.println(letterCounts);
    }
}


/* Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvus, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote. Pavyzdžiui: 
Unikalios reikšmės (3): ['ABC', 'BAC', 'DAB', 'AAA']; 
Unikali kombinacija masyve (AAA): ['ABC', 'ABC', 'ABC', 'AAA']; */

import java.util.Random;
import java.util.Set;
import java.util.HashSet;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        char[] letters = { 'A', 'B', 'C', 'D'};
    Random rand = new Random();
        String[][] masyvai = new String[3][200];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 200; j++) {
            StringBuilder str = new StringBuilder();
                for (int k = 0; k < 3; k++) {
                    str.append(letters[rand.nextInt(letters.length)]);
                }
                masyvai[i][j] = str.toString();
            }
        }
        System.out.println(Arrays.deepToString(masyvai));
    }
}

String[] finalMasyvas = new String[3 * 200];
for (int i = 0; i < 200; i++) {
    finalMasyvas[i] = masyvai[0][i];
    finalMasyvas[i + 200] = masyvai[1][i];
    finalMasyvas[i + 400] = masyvai[2][i];
}
System.out.println(Arrays.toString(finalMasyvas));

Set < String > uniqueValues = new HashSet < String > (Arrays.asList(finalMasyvas));
System.out.println("Unikalios reikšmės: " + uniqueValues.size());

int maxFrequency = 0;
String maxValue = "";
for (String value: uniqueValues) {
    int frequency = Collections.frequency(Arrays.asList(finalMasyvas), value);
    if (frequency > maxFrequency) {
        maxFrequency = frequency;
        maxValue = value;
    }
}
System.out.println("Unikali kombinacija masyve: " + maxValue);

/* 4.Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis). */

import java.util.Random;
import java.util.Set;
import java.util.HashSet;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] firstArray = new int[100];
        int[] secondArray = new int[100];
    Random rand = new Random();
        Set < Integer > set = new HashSet <> ();
        for (int i = 0; i < 100; i++) {
        int random = rand.nextInt(900) + 100;
            while (set.contains(random)) {
                random = rand.nextInt(900) + 100;
            }
            firstArray[i] = random;
            set.add(random);
        }
        set.clear();
        for (int i = 0; i < 100; i++) {
        int random = rand.nextInt(900) + 100;
            while (set.contains(random)) {
                random = rand.nextInt(900) + 100;
            }
            secondArray[i] = random;
            set.add(random);
        }

        System.out.println("First array : " + Arrays.toString(firstArray));
        System.out.println("Second array : " + Arrays.toString(secondArray));
    }
}

/* 5. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 4 uždavinio masyve, bet nėra antrame 
4 uždavinio masyve. */

import java.util.Arrays;
import java.util.HashSet;

public class Main {
  public static void main(String[] args) {
    int[] firstArray = ...; //pirmas masyvas iš 4 uždavinio
    int[] secondArray = ...; //antras masyvas iš 4 uždavinio

    HashSet<Integer> set = new HashSet<>(Arrays.asList(firstArray));
    set.removeAll(Arrays.asList(secondArray));

    int[] resultArray = new int[set.size()];
    int index = 0;
    for (int item : set) {
      resultArray[index++] = item;
    }
    System.out.println("result array : " + Arrays.toString(resultArray));
  }
}

// 6. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.

import java.util.Arrays;
import java.util.HashSet;

public class Main {
  public static void main(String[] args) {
    int[] firstArray = ...; //pirmas masyvas iš 4 uždavinio
    int[] secondArray = ...; //antras masyvas iš 4 uždavinio

    HashSet<Integer> set = new HashSet<>(Arrays.asList(firstArray));
    set.retainAll(Arrays.asList(secondArray));

    int[] resultArray = new int[set.size()];
    int index = 0;
    for (int item : set) {
      resultArray[index++] = item;
    }
    System.out.println("result array : " + Arrays.toString(resultArray));
  }
}
