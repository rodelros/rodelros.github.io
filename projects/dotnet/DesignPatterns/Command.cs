namespace DesignPatterns.Command;

public static class Test
{
    public static void Run()
    {
        var pawn = new Pawn(Direction.North);
        
        // Create commands
        var moveForward = Commands.MoveForward(pawn);
        var moveBackward = Commands.MoveBackward(pawn);
        var turnLeft = Commands.TurnLeft(pawn);
        var turnRight = Commands.TurnRight(pawn);
        var stop = Commands.Stop(pawn);

        // Execute commands
        moveForward();
        turnLeft();
        turnLeft();
        moveForward();
        turnRight();
        moveBackward();
        stop();
    }
}


public enum Movement
{
    Forward,
    Backward,
    Left,
    Right,
    Stop
}

public enum Direction
{
    North,
    South,
    East,
    West
}

public class Pawn(Direction direction)
{
    private Direction _direction = direction; // Indicates where the pawn is facing
    public void Move(Movement move)
    {
        switch (move)
        {
            case Movement.Forward:
                Console.WriteLine($"Moving {_direction} forward.");
                break;
            case Movement.Backward:
                Console.WriteLine($"Moving {_direction} backward.");
                break;
            case Movement.Left:
                _direction = _direction switch
                {
                    Direction.North => Direction.West,
                    Direction.South => Direction.East,
                    Direction.East => Direction.North,
                    Direction.West => Direction.South,
                    _ => _direction
                };
                Console.WriteLine($"Turning left to face {_direction}.");
                break;
            case Movement.Right:
                _direction = _direction switch
                {
                    Direction.North => Direction.East,
                    Direction.South => Direction.West,
                    Direction.East => Direction.South,
                    Direction.West => Direction.North,
                    _ => _direction
                };
                Console.WriteLine($"Turning right to face {_direction}.");
                break;
            case Movement.Stop:
                Console.WriteLine("Stopping movement.");
                break;
        }
    }
}

public delegate void ExecuteCommand();

public static class Commands
{
    public static ExecuteCommand MoveForward(Pawn pawn) => () => pawn.Move(Movement.Forward);
    public static ExecuteCommand MoveBackward(Pawn pawn) => () => pawn.Move(Movement.Backward);
    public static ExecuteCommand TurnLeft(Pawn pawn) => () => pawn.Move(Movement.Left);
    public static ExecuteCommand TurnRight(Pawn pawn) => () => pawn.Move(Movement.Right);
    public static ExecuteCommand Stop(Pawn pawn) => () => pawn.Move(Movement.Stop);
}

