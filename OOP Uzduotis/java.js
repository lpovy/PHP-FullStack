import java.util.Random;

public class Vaisius {
    private int dydis;
    private int id;
    private boolean prakastas;

    public Vaisius() {
        Random rand = new Random();
        this.dydis = rand.nextInt(21) + 5;
        this.id = rand.nextInt(8999999) + 1000000;
        this.prakastas = false;
    }

    public void prakasti() {
        this.prakastas = true;
    }

    public int getDydis() {
        return dydis;
    }

    public int getId() {
        return id;
    }

    public boolean isPrakastas() {
        return prakastas;
    }
}
// Krepšys 

import java.util.Arrays;

public class Krepšys {
    private Vaisius[] vaisiai;

    public Krepšys() {
        vaisiai = new Vaisius[20];
    }

    public static void pripildyti() {
        for (int i = 0; i < 20; i++) {
            vaisiai[i] = new Vaisius();
        }
        Arrays.sort(vaisiai, (o1, o2) -> o2.getDydis() - o1.getDydis());
    }

    public static Vaisius imti() {
        Vaisius result = vaisiai[0];
        vaisiai = Arrays.copyOfRange(vaisiai, 1, vaisiai.length);
        return result;
    }
}
