import java.awt.Color;
import java.awt.Component;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class Game extends JFrame {

	public Game() {
		setSize(300, 300);
		setTitle("java方格点灯");
		setAlwaysOnTop(true);

		setLayout(new GridLayout(5, 5));

		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				JButton btn = new JButton();
				btn.setText(i + "," + j);
				btn.setBackground(Color.BLACK);
				add(btn);
				btn.addActionListener(new ActionListener() {

					public void actionPerformed(ActionEvent arg0) {
						JButton jb = (JButton) arg0.getSource();
						System.out.println("当前点击的按钮的坐标:" + jb.getText());
						String text = jb.getText();
						String points[] = text.split(",");
						int x = Integer.parseInt(points[0]);
						int y = Integer.parseInt(points[1]);

						String point1 = x + "," + (y + 1);
						String point2 = x + "," + (y - 1);
						String point3 = (x + 1) + "," + (y);
						String point4 = (x - 1) + "," + (y);
						
						changeColor(text);
						changeColor(point1);
						changeColor(point2);
						changeColor(point3);
						changeColor(point4);
					}
				});
			}
		}
		
		

	}
	
	
	protected void changeColor() {
		// TODO Auto-generated method stub
		
	}


	public void changeColor(String point){
		
		Component coms[]= this.getContentPane().getComponents();
		for (Component component : coms) {
			JButton btn= (JButton) component;
			if (btn.getText().equals(point)) {
				if(btn.getBackground()==Color.white){
					btn.setBackground(Color.BLACK);
				}else{
					btn.setBackground(Color.WHITE);
				}
			}
		}
	}

	// public static void main(String[] args) {
	// JFrame frame=new JFrame();
	// frame.setTitle("qq login");
	// frame.setBounds(100, 100, 300, 160);
	//		
	// frame.setVisible(true);
	//
	// }

	public static void main(String[] args) {
		new Game().setVisible(true);
	}

}
